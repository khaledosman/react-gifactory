import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
