import { routerWatchers } from './router/watchers'
import { apiWatchers } from './api/watchers'

export const sharedWatchers = [...routerWatchers, ...apiWatchers]
