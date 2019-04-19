import React, { Component } from 'react'
import { Normalize } from 'styled-normalize'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'

import { configureStore } from './configureStore'
import { ThemeProvider, theme, GlobalStyles } from '@ui/theme'
import { RootRoutes } from './rootRoutes'

const history = createBrowserHistory()
const { store, persistor } = configureStore(history)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <ThemeProvider theme={theme}>
              <>
                <Normalize />
                <GlobalStyles />
                <RootRoutes />
              </>
            </ThemeProvider>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
