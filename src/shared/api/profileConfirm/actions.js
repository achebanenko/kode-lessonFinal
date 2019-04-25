import { createAction } from 'redux-actions'

export const trigger = createAction(
  'api/profileConfirm->TRIGGER',
  ({ code, attemptId }) => ({ code, attemptId }),
)

export const start = createAction('api/profileConfirm->START')
export const success = createAction('api/profileConfirm->SUCCESS')
export const failure = createAction(
  'api/profileConfirm->FAILURE',
  ({ error }) => ({ error }),
)

export const reset = createAction('api/profileConfirm->RESET')