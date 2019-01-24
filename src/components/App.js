import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import Header from './header/Header'
import ExplorerContainer from '../containers/explorer-container'
import { fetchData, clearResults } from '../actions/explorer-actions'
class App extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick ({ q }) {
    console.log('w00t', q.value)
    this.props.dispatch(clearResults())
    this.props.dispatch(fetchData({
      q: q.value
    }))
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

export default connect(
  state => ({}),
  dispatch => ({ dispatch })
)(App)
