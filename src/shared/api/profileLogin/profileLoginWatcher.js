import { put, takeLatest, call } from 'redux-saga/effects'
import { apiRequest } from '../apiRequest'
import * as actions from './actions'

function* worker(action) {
  yield put(actions.start())
  try {
    const response = yield call(apiRequest, '/account/profile/login', 'POST', {
      body: action.payload,
    })
    console.log(response)
    yield put(actions.success())
  } catch (error) {
    yield put(actions.failure({ error }))
  }
}

export function* profileLoginWatcher() {
  yield takeLatest(actions.trigger.toString(), worker)
}
