import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import IndexPage from './pages/IndexPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import RatingsPage from './pages/RatingsPage'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/ratings" component={RatingsPage} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
