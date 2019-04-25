import { takeLatest, call } from 'redux-saga/effects'
import { apiRequest } from '../apiRequest'
import * as actions from './actions'

function* worker(action) {
  //const { id } = action.payload

  try {
    const response = yield call(apiRequest, '/account/profile', 'GET')

    console.log(response)
    
  } catch (error) {
    console.log(error)
  }
}

export function* profileInfoWatcher() {
  yield takeLatest(actions.trigger.toString(), worker)
}
