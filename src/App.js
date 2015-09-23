import React, { Component } from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import Header from './components/Header'

export class App extends Component {
  render() {
    return (
      <DocumentTitle title="足球各种吹">
        <div>
          <Header />
          <div className="container main">
            { this.props.children }
          </div>
        </div>
      </DocumentTitle>
    );
  }
}