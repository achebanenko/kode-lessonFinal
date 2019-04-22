import { takeEvery } from 'redux-saga/effects'
import { signInSubmitTrigger } from './actions'

function* worker(action) {
  console.log('submit')

  if (action.payload.errorMessage) {
    console.log('failed')
  }
  else {
    console.log('success')
  }

  console.log(action.payload)
}

export function* signInSubmitWatcher() {
  yield takeEvery(signInSubmitTrigger.toString(), worker)
}