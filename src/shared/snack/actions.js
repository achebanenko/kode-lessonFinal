import { createAction } from 'redux-actions'

export const open = createAction(
  'snack/OPEN',
  ({ type, msgUser }) => ({
    type,
    msgUser,
  }),
)

export const close = createAction('snack/CLOSE')

export const snackActions = {
  open,
  close,
}