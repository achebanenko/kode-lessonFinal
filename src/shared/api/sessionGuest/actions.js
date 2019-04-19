import { createAction } from 'redux-actions'

export const start = createAction('api/sessionGuest->START')
export const success = createAction('api/sessionGuest->SUCCESS')
export const failure = createAction(
  'api/sessionGuest->FAILURE',
  ({ error }) => ({ error }),
)
