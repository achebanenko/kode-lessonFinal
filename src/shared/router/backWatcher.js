import { takeEvery, put } from 'redux-saga/effects'
import { goBack } from 'connected-react-router'
import { backTrigger } from './actions'

function* worker() {
  yield put(goBack())
}

export function* backWatcher() {
  yield takeEvery(backTrigger.toString(), worker)
}
