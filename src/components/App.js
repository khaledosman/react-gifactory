import React, { memo } from 'react'
import './App.css'
import { connect } from 'react-redux'
import Header from './header/Header'
import ExplorerContainer from '../containers/explorer-container'
import { fetchData, clearResults } from '../actions/explorer-actions'

function App (props) {
  const handleClick = ({ q }) => {
    props.dispatch(clearResults())
    props.dispatch(fetchData({ q }))
  }

  return (
    <div>
      <Header onClick={handleClick} />
      <ExplorerContainer />
    </div>
  )
}

export default connect(
  null,
  null
)(memo(App))
