import { call, all, race, put, delay } from 'redux-saga/effects'
import { getToken } from './getToken'
import { apiDataActions } from '@shared/apiData'
import { routerActions, paths } from '@shared/router'

const MIN_NETWORK_LATENCY = 500
const TIMEOUT = 120000

export function* apiRequest(endpoint, method, params) {
  const isNeedToken = !(params && params.auth === false)
  const token = isNeedToken ? yield call(getToken) : undefined
  const minLatency =
    params && params.minLatency !== undefined
      ? params.minLatency
      : MIN_NETWORK_LATENCY
  const options = {
    method: method ? method : 'GET',
    headers: {
      Authorization: isNeedToken ? `Token ${token}` : undefined,
      'Content-Type': 'application/json',
    },
    body: params && params.body ? JSON.stringify(params.body) : undefined,
  }
  const queryString =
    params && params.query
      ? `?${Object.keys(params.query)
          .map(key => `${key}=${params.query[key]}`)
          .join('&')}`
      : ''
  const host = '/api/v8'
  const url = `${host}${endpoint}${queryString}`

  const { timeout, response } = yield race({
    timeout: delay(TIMEOUT),
    response: all([
      call(fetch, url, options),
      minLatency ? delay(minLatency) : call([Promise, 'resolve']),
    ]),
  })
  if (timeout) {
    const e = { key: 'timeout', msgUser: 'Превышено время ожидания запроса' }
    throw e
  } else {
    switch (response[0].status) {
      case 200:
        return yield call([response[0], 'json'])
      case 204:
        return true
      case 400: {
        const error = yield call([response[0], 'json'])
        if (error.key === 'AuthTokenExpired') {
          yield put(apiDataActions.auth.resetLastUpdate({ lastUpdate: null }))
          return yield call(apiRequest, endpoint, method, params)
        } else if (
          error.key === 'InvalidAuthToken' ||
          error.key === 'InvalidRefreshToken' ||
          error.key === 'RefreshTokenExpired'
        ) {
          // full logout
          yield put(apiDataActions.auth.reset())
          const sessionError = {
            key: 'SessionError',
            msgUser: 'Ваша сессия устарела',
          }
          yield put(routerActions.pushTrigger({ path: paths.home }))
          throw sessionError
        } else {
          throw error
        }
      }
      case 404: {
        const error = {
          key: 'PageNotFound',
          msgUser: 'Ошибка сервера. Страница не найдена.',
        }
        throw error
      }
      case 502:
      case 504: {
        const error = {
          key: 'ServerIsUnavailable',
          msgUser: 'Сервер недоступен',
        }
        throw error
      }
      default: {
        const error = yield call([response[0], 'json'])
        throw error
      }
    }
  }
}

export function* errorHandler(error) {
  // eslint-disable-next-line no-console
  yield undefined
  console.warn(error)
  // yield put(snackActions.trigger({ type: 'error', message: error.msgUser }))
}
