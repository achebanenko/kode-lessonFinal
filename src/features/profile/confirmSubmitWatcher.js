import { takeEvery, take, put, select } from 'redux-saga/effects'
import { confirmSubmitTrigger } from './actions'
import { snackActions } from '@shared/snack'
import { apiActions, apiSelectors } from '@shared/api'

function* worker(action) {
  const { code, attemptId, } = action.payload
  
  yield put(apiActions.profileConfirm.trigger({ code, attemptId, }))
  
  // bad response
  yield take(apiActions.profileConfirm.failure.toString())
  
  const { msgUser } = yield select(apiSelectors.profileConfirm.getError)
  yield put(snackActions.trigger({ 
    type: 'error', 
    message: msgUser ? msgUser : 'Неверный код подтверждения',
  }))

  yield take(snackActions.close.toString())
  yield put(apiActions.profileConfirm.reset())
}

export function* confirmSubmitWatcher() {
  yield takeEvery(confirmSubmitTrigger.toString(), worker)
}