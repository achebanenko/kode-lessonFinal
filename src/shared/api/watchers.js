import { profileLoginWatcher } from './profileLogin/profileLoginWatcher'
import { profileRegistrationWatcher } from './profileRegistration/profileRegistrationWatcher'
import { profileConfirmWatcher } from './profileConfirm/profileConfirmWatcher'

export const apiWatchers = [
  profileLoginWatcher,
  profileRegistrationWatcher,
  profileConfirmWatcher,
]
