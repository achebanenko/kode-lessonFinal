import { backWatcher } from './backWatcher'
import { pushWatcher } from './pushWatcher'
import { replaceWatcher } from './replaceWatcher'

export const routerWatchers = [backWatcher, pushWatcher, replaceWatcher]
