import { takeEvery, put, } from 'redux-saga/effects'
import { signUpSubmitTrigger } from './actions'
import { snackActions } from '@shared/snack'
import { apiActions } from '@shared/api'
import { FIELDS } from '@shared/names'

function* worker(action) {
  const { formValues, formErrors, formValid, } = action.payload

  // snack
  if(formErrors[FIELDS.signup.login]) {
    yield put(snackActions.trigger({
      type: 'error',
      message: 'Поле Номер телефона заполнено неверно',
    }))
  } else if(formErrors[FIELDS.signup.terms]) {
    yield put(snackActions.trigger({
      type: 'error',
      message: 'Чтобы создать аккаунт, Utair нужно ваше согласие на обработку данных',
    }))
  }

  if (formValid) {
    yield put(apiActions.profileRegistration.trigger({ 
      login: formValues[FIELDS.signup.login],
      confirmationGDPRDate: Date.now()
    }))
  }
}

export function* signUpSubmitWatcher() {
  yield takeEvery(signUpSubmitTrigger.toString(), worker)
}