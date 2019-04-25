import { put, takeLatest, take, call, delay, all } from 'redux-saga/effects'
import { apiRequest } from '../apiRequest'
import * as actions from './actions'
import { apiDataActions } from '@shared/apiData'
import { routerActions, paths } from '@shared/router'
import { snackActions } from '@shared/snack'

function* worker(action) {
  const { login } = action.payload

  yield put(actions.start())
  try {
    const response = yield call(apiRequest, '/account/profile/login', 'POST', {
      body: { login, }
    })

    yield all({
      status: yield put(actions.success()),
      latency: yield delay(2000) 
    })
    // store attempt info and forward
    yield put(apiDataActions.auth.attempt({ ...response, login, }))
    yield put(routerActions.pushTrigger({ path: paths.profile.confirm }))
    yield put(actions.reset())
    
  } catch (error) {
    yield put(actions.failure({ error }))
    yield put(snackActions.trigger({ 
      type: 'error', 
      message: error.key === 'KrrInvalidUserCredentials' ? 'Такого аккаунта не существует' : error.msgUser,
    }))

    yield take(snackActions.close.toString())
    yield put(actions.reset())
  }
}

export function* profileLoginWatcher() {
  yield takeLatest(actions.trigger.toString(), worker)
}
