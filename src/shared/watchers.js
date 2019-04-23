import { routerWatchers } from './router/watchers'
import { apiWatchers } from './api/watchers'
import { snackWatcher } from './snack/watcher'

export const sharedWatchers = [...routerWatchers, ...apiWatchers, snackWatcher]
