import * as sessionGuestActions from './sessionGuest/actions'
import * as sessionGuestSelectors from './sessionGuest/selectors'

import * as sessionRefreshActions from './sessionRefresh/actions'
import * as sessionRefreshSelectors from './sessionRefresh/selectors'

import * as profileLoginActions from './profileLogin/actions'
import * as profileLoginSelectors from './profileLogin/selectors'

import * as profileRegistrationActions from './profileRegistration/actions'
import * as profileRegistrationSelectors from './profileRegistration/selectors'

export const apiActions = {
  sessionGuest: sessionGuestActions,
  sessionRefresh: sessionRefreshActions,
  profileLogin: profileLoginActions,
  profileRegistration: profileRegistrationActions,
}

export const apiSelectors = {
  sessionGuest: sessionGuestSelectors,
  sessionRefresh: sessionRefreshSelectors,
  profileLogin: profileLoginSelectors,
  profileRegistration: profileRegistrationSelectors,
}
