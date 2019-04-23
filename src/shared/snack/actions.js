import { createAction } from 'redux-actions'

export const trigger = createAction(
  'snack/TRIGGER',
  ({ type, message }) => ({ type, message }),
)

export const open = createAction(
  'snack/OPEN',
  ({ type, message }) => ({ type, message }),
)

export const close = createAction(
  'snack/CLOSE'
)
