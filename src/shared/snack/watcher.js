import { takeEvery, put, delay, select, all } from 'redux-saga/effects'
import { trigger, open, close } from './actions'
import { getSnack } from './selectors'

function* worker(action) {
  const nextSnack = action.payload
  const prevSnack = yield select(getSnack)
    
  if (nextSnack.type !== prevSnack.type || nextSnack.message !== prevSnack.message) {
    yield all({
      open: yield put(open(nextSnack)),
      latency: yield delay(3000) 
    })
    
    // if already closed
    const { active } = yield select(getSnack)
    if (active) {
     yield put(close())
    }
  }
}

export function* snackWatcher() {
  yield takeEvery(trigger.toString(), worker)
}