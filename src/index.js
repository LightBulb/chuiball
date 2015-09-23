import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { App } from './App'
import Signup from './routes/Signup'
require('./main.styl')


class About extends Component {
  render () {
    return (
      <DocumentTitle title="关于">
        <div>About me!</div>
      </DocumentTitle>
    )
  }
}

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="signup" component={Signup} />
    </Route>
  </Router>
), document.getElementById('root'))

