import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'
import Footer from './Footer'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <>
    <App />
    <Footer />
  </>,
  rootElement
)

serviceWorker.unregister()
