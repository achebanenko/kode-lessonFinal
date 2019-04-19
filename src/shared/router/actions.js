import { createAction } from 'redux-actions'

export const pushTrigger = createAction(
  '@router/push->TRIGGER',
  ({ path }) => ({ path }),
)

export const replaceTrigger = createAction(
  '@router/replace->TRIGGER',
  ({ path }) => ({ path }),
)

export const backTrigger = createAction('@router/back->TRIGGER')
