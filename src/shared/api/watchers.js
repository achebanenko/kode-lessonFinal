import { profileLoginWatcher } from './profileLogin/profileLoginWatcher'
import { profileRegistrationWatcher } from './profileRegistration/profileRegistrationWatcher'
import { profileConfirmWatcher } from './profileConfirm/profileConfirmWatcher'
import { profileInfoWatcher } from './profileInfo/profileInfoWatcher'

export const apiWatchers = [
  profileLoginWatcher,
  profileRegistrationWatcher,
  profileConfirmWatcher,
  profileInfoWatcher,
]
