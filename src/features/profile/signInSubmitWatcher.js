import { takeEvery, put, delay, select, all } from 'redux-saga/effects'
import { signInSubmitTrigger } from './actions'
import { snackActions } from '@shared/snack/actions'
import { snackSelectors } from '@shared/snack/selectors'

function* worker(action) {
  console.log('submit')

  //snack
  if (action.payload.openSnack) {
    const { type, msgUser } = action.payload

    yield all({
      open: yield put(snackActions.open({ type, msgUser })),
      latency: yield delay(3000) 
    })
    
    const { active } = yield select(snackSelectors.getSnack)
    if (active) yield put(snackActions.close())
  }

  //console.log(action.payload)
}

export function* signInSubmitWatcher() {
  yield takeEvery(signInSubmitTrigger.toString(), worker)
}