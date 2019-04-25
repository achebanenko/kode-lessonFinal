import { signInSubmitWatcher } from './signInSubmitWatcher'
import { signUpSubmitWatcher } from './signUpSubmitWatcher'
import { confirmSubmitWatcher } from './confirmSubmitWatcher'
import { confirmResendWatcher } from './confirmResendWatcher'

export const profileWatchers = [
  signInSubmitWatcher,
  signUpSubmitWatcher,
  confirmSubmitWatcher,
  confirmResendWatcher,
]
