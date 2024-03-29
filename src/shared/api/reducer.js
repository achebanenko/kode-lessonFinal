import { combineReducers } from 'redux'
import { sessionGuestReducer } from './sessionGuest/reducer'
import { sessionRefreshReducer } from './sessionRefresh/reducer'
import { profileLoginReducer } from './profileLogin/reducer'
import { profileRegistrationReducer } from './profileRegistration/reducer'
import { profileConfirmReducer } from './profileConfirm/reducer'

export const apiReducer = combineReducers({
  sessionGuest: sessionGuestReducer,
  sessionRefresh: sessionRefreshReducer,
  profileLogin: profileLoginReducer,
  profileRegistration: profileRegistrationReducer,
  profileConfirm: profileConfirmReducer,
})
