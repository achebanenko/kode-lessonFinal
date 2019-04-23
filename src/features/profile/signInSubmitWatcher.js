import { takeEvery, put } from 'redux-saga/effects'
import { signInSubmitTrigger } from './actions'
import { snackActions } from '@shared/snack'

function* worker(action) {
  console.log('signin', action.payload)

  //snack
  if (action.payload.shouldOpenSnack) {
    yield put(snackActions.trigger(action.payload.snack))
  }

}

export function* signInSubmitWatcher() {
  yield takeEvery(signInSubmitTrigger.toString(), worker)
}