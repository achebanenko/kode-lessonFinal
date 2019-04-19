import { takeEvery, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { pushTrigger } from './actions'

function* worker(action) {
  yield put(push(action.payload.path))
}

export function* pushWatcher() {
  yield takeEvery(pushTrigger.toString(), worker)
}
