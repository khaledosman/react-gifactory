import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

if (process.env.NODE_ENV !== 'production') {
  // const { whyDidYouUpdate } = require('why-did-you-update')
  // whyDidYouUpdate(React)

  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React, {
    include: [/.*/]
  })
}

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
})

const store = createStore(
  rootReducer,
  /* preloadedState , */
  composeEnhancers(
    applyMiddleware(logger, ReduxThunk)
  )
)

ReactDOM
  .render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>, document.getElementById('root')
  )

serviceWorker.register({})
