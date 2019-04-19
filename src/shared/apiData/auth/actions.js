import { createAction } from 'redux-actions'

export const update = createAction(
  'apiData/auth->UDPATE',
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
