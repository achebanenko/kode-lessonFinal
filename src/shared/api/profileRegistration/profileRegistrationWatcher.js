import { put, takeLatest, take, call, all, delay } from 'redux-saga/effects'
import { apiRequest } from '../apiRequest'
import * as actions from './actions'
import { routerActions, paths } from '@shared/router'
import { apiActions } from '@shared/api'
import { apiDataActions } from '@shared/apiData'
import { snackActions } from '@shared/snack'

function* worker(action) {
  const { login, confirmationGDPRDate } = action.payload

  yield put(actions.start())
  try {
    const response = yield call(apiRequest, '/account/profile', 'POST', {
      body: { login, confirmationGDPRDate, }
    })
    
    console.log(response)
    yield all({
      status: yield put(actions.success()),
      latency: yield delay(2000) 
    })
    // store login
    yield put(apiDataActions.auth.attempt({ login, }))
    yield put(actions.reset())
    // forward
    yield put(routerActions.pushTrigger({ path: paths.profile.signIn }))
    yield put(apiActions.profileLogin.trigger({ login: action.payload.login }))
    yield put(snackActions.trigger({
      type: 'info',
      message: 'Аккаунт создан, выполняем вход в личный кабинет',
    }))
  } catch (error) {
    yield put(actions.failure({ error }))
    yield put(snackActions.trigger({ 
      type: 'error', 
      message: error.msgUser ? error.msgUser : 'Не удалось создать аккаунт',
    }))

    yield take(snackActions.close.toString())
    yield put(actions.reset())
  }
}

export function* profileRegistrationWatcher() {
  yield takeLatest(actions.trigger.toString(), worker)
}
