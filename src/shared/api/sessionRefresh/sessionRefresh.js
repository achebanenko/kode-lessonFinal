import { call, put, select } from 'redux-saga/effects'
import * as actions from './actions'
import { apiDataActions, apiDataSelectors } from '@shared/apiData'

export function* sessionRefresh() {
  try {
    const refresh_token = yield select(apiDataSelectors.auth.getRefreshToken)
    yield put(actions.start())
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh_token,
      }),
    }
    const url = '/api/v8/sessions/refresh'
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
    yield put(actions.failure(e))
  }
}
