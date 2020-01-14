import React, { memo, useState } from 'react'
import './App.css'
import { connect } from 'react-redux'
import Header from './components/header/Header'
import ExplorerContainer from './containers/explorer-container'
import { fetchData, clearResults } from './actions/explorer-actions'

function App (props) {
  const [q, setQ] = useState('')
  const handleClick = ({ q }) => {
    setQ(q)
    props.dispatch(clearResults())
    props.dispatch(fetchData({ q }))
  }

  return (
    <div>
      <Header onClick={handleClick} />
      <ExplorerContainer q={q} />
    </div>
  )
}

export default connect(
  null,
  null
)(memo(App))
