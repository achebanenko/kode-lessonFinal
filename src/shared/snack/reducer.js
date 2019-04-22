import { handleActions } from 'redux-actions'
import * as actions from './actions'

const initialState = {
  active: false,
  type: null,
  msgUser: null,
}

export const snackReducer = handleActions(
  {
    [actions.open]: (state, action) => ({ ...state, active: true, ...action.payload }),
    [actions.close]: state => ({ ...initialState, }),
  },
  initialState,
)