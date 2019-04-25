import { takeEvery, put } from 'redux-saga/effects'
import { signInSubmitTrigger } from './actions'
import { snackActions } from '@shared/snack'
import { apiActions } from '@shared/api'
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
  }
}

export function* signInSubmitWatcher() {
  yield takeEvery(signInSubmitTrigger.toString(), worker)
}