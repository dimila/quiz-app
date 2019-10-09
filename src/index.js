import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'
import Footer from './Footer'
import Header from './Header'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <>
    <Header />
    <App />
    <Footer />
  </>,
  rootElement
)

serviceWorker.unregister()
