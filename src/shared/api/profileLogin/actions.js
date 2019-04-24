import { createAction } from 'redux-actions'

export const trigger = createAction(
  'api/profileLogin->TRIGGER',
  ({ login }) => ({ login }),
)

export const start = createAction('api/profileLogin->START')
export const success = createAction('api/profileLogin->SUCCESS')
export const failure = createAction(
  'api/profileLogin->FAILURE',
  ({ error }) => ({ error }),
)

export const reset = createAction('api/profileLogin->RESET')