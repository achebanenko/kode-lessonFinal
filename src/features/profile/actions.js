import { createAction } from 'redux-actions'

export const signInSubmitTrigger = createAction('profile/signInSubmit->TRIGGER')

export const signUpSubmitTrigger = createAction('profile/signUpSubmit->TRIGGER')

export const confirmSubmitTrigger = createAction(
  'profile/confirmSubmit->TRIGGER',
)

export const confirmResendTrigger = createAction(
  'profile/confirmResend->TRIGGER',
)
