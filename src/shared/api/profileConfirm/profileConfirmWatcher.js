import { put, takeLatest, call, delay, all } from 'redux-saga/effects'
import { apiRequest } from '../apiRequest'
import * as actions from './actions'
import { apiDataActions } from '@shared/apiData'
import { routerActions, paths } from '@shared/router'

function* worker(action) {
  const { code, attemptId } = action.payload

  yield put(actions.start())
  try {
    const response = yield call(apiRequest, '/account/profile/login/confirm', 'POST', {
      body: { code, attemptId },
    })

    console.log(response)
    yield put(actions.success())
    //yield put(apiDataActions.auth.attempt({ ...response, login, }))

    yield all({
      //forward: yield put(routerActions.pushTrigger({ path: paths.profile.confirm })),
      //latency: yield delay(1500) 
    })
  } catch (error) {
    yield put(actions.failure({ error }))
  }
}

export function* profileConfirmWatcher() {
  yield takeLatest(actions.trigger.toString(), worker)
}
