import { select, take, fork } from 'redux-saga/effects'
import { apiDataActions, apiDataSelectors } from '@shared/apiData'
import { apiSelectors } from '@shared/api'

import { sessionGuest } from './sessionGuest/sessionGuest'
import { sessionRefresh } from './sessionRefresh/sessionRefresh'

export function* getToken() {
  const isFetchingGuest = yield select(apiSelectors.sessionGuest.getIsFetching)
  const isFetchingRefresh = yield select(
    apiSelectors.sessionRefresh.getIsFetching,
  )
  if (isFetchingGuest || isFetchingRefresh) {
    yield take(apiDataActions.auth.update.toString())
    return yield select(apiDataSelectors.auth.getToken)
  }
  const token = yield select(apiDataSelectors.auth.getToken)
  if (!token) {
    yield fork(sessionGuest, 'sessionGuest')
    yield take(apiDataActions.auth.update.toString())
    return yield select(apiDataSelectors.auth.getToken)
  }
  const isNeedRefresh = yield select(apiDataSelectors.auth.getIsNeedUpdate)
  if (isNeedRefresh) {
    yield fork(sessionRefresh, 'sessionRefresh')
    yield take(apiDataActions.auth.update.toString())
    return yield select(apiDataSelectors.auth.getToken)
  }
  return token
}
