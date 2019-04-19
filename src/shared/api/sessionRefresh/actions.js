import { createAction } from 'redux-actions'

export const start = createAction('api/sessionRefresh->START')
export const success = createAction('api/sessionRefresh->SUCCESS')
export const failure = createAction(
  'api/sessionRefresh->FAILURE',
  ({ error }) => ({
    error,
  }),
)
