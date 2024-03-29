import { put, takeLatest, take, call, delay, all } from 'redux-saga/effects'
import { apiRequest } from '../apiRequest'
import * as actions from './actions'
import { apiDataActions } from '@shared/apiData'
import { routerActions, paths } from '@shared/router'
import { snackActions } from '@shared/snack'

function* worker(action) {
  const { code, attemptId } = action.payload

  yield put(actions.start())
  try {
    const response = yield call(apiRequest, '/account/profile/login/confirm', 'POST', {
      body: { code, attemptId },
    })

    console.log(response)
    yield all({
      status: yield put(actions.success()),
      latency: yield delay(2000) 
    })
    //store id from response then go home
    const { id } = response
    yield put(apiDataActions.auth.success({ id, }))
    yield put(routerActions.pushTrigger({ path: paths.home }))

  } catch (error) {
    yield put(actions.failure({ error }))
    yield put(snackActions.trigger({ 
      type: 'error', 
      message: error.msgUser ? error.msgUser : 'Неверный код подтверждения',
    }))

    yield take(snackActions.close.toString())
    yield put(actions.reset())
  }
}

export function* profileConfirmWatcher() {
  yield takeLatest(actions.trigger.toString(), worker)

  // watch three errors
  for (let i = 0; i < 3; i++) {
    yield take(actions.failure.toString())
  }
  yield put(apiDataActions.auth.reset())
  yield put(routerActions.pushTrigger({ path: paths.profile.signIn }))
}
