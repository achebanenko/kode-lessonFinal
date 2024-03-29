import { createAction } from 'redux-actions'

export const update = createAction(
  'apiData/auth->UPDATE',
  ({ token, refresh_token, lastUpdate }) => ({
    token,
    refresh_token,
    lastUpdate,
  }),
)
export const reset = createAction('apiData/auth->RESET')

export const resetLastUpdate = createAction('apiData/auth->RESET_LAST_UPDATE')

export const createUdid = createAction(
  'apiData/auth->CREATE_UDID',
  ({ udid }) => ({
    udid,
  }),
)

export const attempt = createAction(
  'apiData/auth->ATTEMPT',
  ({ login, channel = null, attemptId = null }) => ({
    login,
    channel,
    attemptId,
  }),
)
export const success = createAction(
  'apiData/auth->SUCCESS',
  ({ id }) => ({ id }),
)
