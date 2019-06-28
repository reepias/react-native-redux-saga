import React from 'react'
import { AppRegistry } from 'react-native'

import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'

const ReduxSagaApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('reduxsaga', () => ReduxSagaApp)
