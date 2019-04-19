import { call, put, select } from 'redux-saga/effects'
import * as actions from './actions'
import { apiDataActions, apiDataSelectors } from '@shared/apiData'

export function* sessionGuest() {
  try {
    const udid = yield select(apiDataSelectors.auth.getUdid)
    yield put(actions.start())
    const headers = {
      'Content-Type': 'application/json',
    }
    const body = {
      appVersion: 'Web',
      brandName: 'Web',
      lang: 'ru',
      model: 'Web',
      osVersion: 'Web',
      platform: 'web',
      screenResolution: 'Web',
      udid,
    }
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    }
    const url = '/api/v8/sessions/guest'
    const response = yield call(fetch, url, options)
    const parsedResponse = yield call([response, 'json'])
    yield put(
      apiDataActions.auth.update({
        ...parsedResponse,
        lastUpdate: Number(new Date()),
      }),
    )
    yield put(actions.success())
  } catch (e) {
    // eslint-disable-next-line no-console
    console.info({ e })
    yield put(actions.failure(e))
  }
}
