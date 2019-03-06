import React, { PureComponent } from 'react'
import './App.css'
import { connect } from 'react-redux'
import Header from './header/Header'
import ExplorerContainer from '../containers/explorer-container'
import { fetchData, clearResults } from '../actions/explorer-actions'
class App extends PureComponent {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    // ga('send', {
    //   hitType: 'event',
    //   eventCategory: 'PageView',
    //   eventAction: 'Viewed',
    //   eventLabel: window.location.href
    // })
  }

  handleClick ({ q }) {
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
  null,
  null
)(App)
