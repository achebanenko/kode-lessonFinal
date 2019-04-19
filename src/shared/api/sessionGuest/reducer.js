import { handleActions } from 'redux-actions'
import * as actions from './actions'

const initialState = { isFetching: false, error: null }

export const sessionGuestReducer = handleActions(
  {
    [actions.start]: () => ({ isFetching: true, error: null }),
    [actions.success]: () => ({ isFetching: false, error: null }),
    [actions.failure]: (state, action) => ({
      isFetching: false,
      error: action.payload.error,
    }),
  },
  initialState,
)
