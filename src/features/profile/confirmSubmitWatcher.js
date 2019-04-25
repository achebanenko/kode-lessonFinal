import { takeEvery, put, } from 'redux-saga/effects'
import { confirmSubmitTrigger } from './actions'
import { apiActions } from '@shared/api'

function* worker(action) {
  const { code, attemptId, } = action.payload
  yield put(apiActions.profileConfirm.trigger({ code, attemptId, }))
}

export function* confirmSubmitWatcher() {
  yield takeEvery(confirmSubmitTrigger.toString(), worker)
}