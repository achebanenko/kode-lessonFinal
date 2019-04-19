import { all, fork, take, select, put } from 'redux-saga/effects'
import { REHYDRATE } from 'redux-persist'
import { v4 } from 'uuid'

import { sharedWatchers } from '@shared/watchers'
import { featuresWatchers } from '@features/watchers'

import { apiDataSelectors, apiDataActions } from '@shared/apiData'

const watchers = [...sharedWatchers, ...featuresWatchers]

export function* rootSaga() {
  yield take(REHYDRATE)

  const udid = yield select(apiDataSelectors.auth.getUdid)
  if (!udid) {
    yield put(apiDataActions.auth.createUdid({ udid: v4() }))
    // eslint-disable-next-line no-console
    console.info('udid has been created')
  }

  yield all(watchers.map(fork))
}
