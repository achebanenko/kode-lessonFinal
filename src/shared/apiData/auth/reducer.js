import { handleActions } from 'redux-actions'
import * as actions from './actions'

const initialState = {
  token: null,
  refresh_token: null,
  udid: null,
  lastUpdate: null,

  login: null,
  channel: null,
  attemptId: null,

  id: null,
}

export const authReducer = handleActions(
  {
    [actions.update]: (state, action) => ({ ...state, ...action.payload }),
    [actions.reset]: state => ({
      ...initialState,
      udid: state.udid,
    }),
    [actions.resetLastUpdate]: state => ({
      ...state,
      lastUpdate: null,
    }),
    [actions.createUdid]: (state, action) => ({
      ...state,
      udid: action.payload.udid,
    }),

    [actions.attempt]: (state, action) => ({ ...state, ...action.payload }),
    [actions.success]: (state, action) => ({ ...state, ...action.payload }),
  },
  initialState,
)
