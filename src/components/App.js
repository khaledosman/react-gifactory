import React, { Component } from 'react'
import './App.css'
import Header from './header/Header'
import ExplorerContainer from '../containers/explorer-container'
class App extends Component {
  handleClick ({q}) {
    console.log('w00t', q.value)
  }
  render () {
    return (
      <div>
        <Header onClick={this.handleClick} />
        <ExplorerContainer />
      </div>
    )
  }
}

export default App
