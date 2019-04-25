import { takeEvery, put, select, take } from 'redux-saga/effects'
import { signInSubmitTrigger } from './actions'
import { snackActions } from '@shared/snack'
import { apiActions, apiSelectors } from '@shared/api'
import { FIELDS } from '@shared/names'

function* worker(action) {
  const { formValues, formErrors, formValid, } = action.payload

  // snack
  if(formErrors[FIELDS.signin.login]) {
    yield put(snackActions.trigger({
      type: 'error',
      message: 'Поле Номер телефона или Email заполнено неверно',
    }))
  }

  if (formValid) {
    yield put(apiActions.profileLogin.trigger({ 
      login: formValues[FIELDS.signin.login] 
    }))
    
    // bad response
    yield take(apiActions.profileLogin.failure.toString())
    const { key, msgUser } = yield select(apiSelectors.profileLogin.getError)

    yield put(snackActions.trigger({ 
      type: 'error', 
      message: key === 'KrrInvalidUserCredentials' ? 'Такого аккаунта не существует' : msgUser,
    }))

    yield take(snackActions.close.toString())
    yield put(apiActions.profileLogin.reset())
  }
}

export function* signInSubmitWatcher() {
  yield takeEvery(signInSubmitTrigger.toString(), worker)
}