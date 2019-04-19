import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'

import { apiReducer } from '@shared/api/reducer'
import { apiDataReducer } from '@shared/apiData/reducer'

export const createRootReducer = history =>
  combineReducers({
    api: apiReducer,
    apiData: apiDataReducer,
    form: formReducer,
    router: connectRouter(history),
  })
