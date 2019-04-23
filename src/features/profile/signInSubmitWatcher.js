import { takeEvery, put, select, take } from 'redux-saga/effects'
import { signInSubmitTrigger } from './actions'
import { snackActions } from '@shared/snack'
import { apiActions, apiSelectors } from '@shared/api'
import { FORMS, FIELDS } from '@shared/names'

function* worker(action) {
  console.log(FORMS.signin, action.payload)

  if (action.payload.shouldOpenSnack) {
    yield put(snackActions.trigger(action.payload.snack))
  }

  if (action.payload.valid) {
    yield put(apiActions.profileLogin.trigger({ login: action.payload.values[FIELDS.signin.login] }))
    
    // bad response
    yield take(apiActions.profileLogin.failure.toString())
    const { key, msgUser } = yield select(apiSelectors.profileLogin.getError)
        
    yield put(snackActions.trigger({ 
      type: 'error', 
      message: key === 'KrrInvalidUserCredentials' ? 'Такого аккаунта не существует' : msgUser,
    }))
  }
}

export function* signInSubmitWatcher() {
  yield takeEvery(signInSubmitTrigger.toString(), worker)
}