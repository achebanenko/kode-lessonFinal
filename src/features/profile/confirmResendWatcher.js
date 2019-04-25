import { put, takeLatest, select } from 'redux-saga/effects'
import * as actions from './actions'
import { routerActions, paths } from '@shared/router'
import { apiActions } from '@shared/api'
import { apiDataSelectors } from '@shared/apiData'
import { snackActions } from '@shared/snack'

function* worker() {
  const { login } = yield select(apiDataSelectors.auth.getAttempt)
  yield put(routerActions.pushTrigger({ path: paths.profile.signIn }))
  yield put(apiActions.profileLogin.trigger({ login, }))
  yield put(snackActions.trigger({
    type: 'info',
    message: 'Выполняем повторную отправку кода',
  }))
}

export function* confirmResendWatcher() {
  yield takeLatest(actions.confirmResendTrigger.toString(), worker)
}