import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import rootReducer from './reducers'

import App from "./components/app"
import Home from "./components/home"
import About from "./components/about"

import configureStore from "./store/configureStore"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
