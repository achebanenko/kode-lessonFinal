import { createAction } from 'redux-actions'

export const trigger = createAction(
  'api/profileRegistration->TRIGGER',
  ({ login, confirmationGDPRDate }) => ({ login, confirmationGDPRDate }),
)

export const start = createAction('api/profileRegistration->START')
export const success = createAction('api/profileRegistration->SUCCESS')
export const failure = createAction(
  'api/profileRegistration->FAILURE',
  ({ error }) => ({ error }),
)

export const reset = createAction('api/profileRegistration->RESET')