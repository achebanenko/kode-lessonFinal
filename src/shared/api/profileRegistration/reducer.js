import { handleActions } from 'redux-actions'
import * as actions from './actions'

const initialState = {
  status: null,
  error: null,
}

export const profileRegistrationReducer = handleActions(
  {
    [actions.start]: () => ({ status: 'loading', error: null }),
    [actions.success]: () => ({ status: 'success', error: null }),
    [actions.failure]: (state, action) => ({
      status: 'failure',
      error: action.payload.error,
    }),
    [actions.reset]: () => ({ ...initialState }),
  },
  initialState,
)
