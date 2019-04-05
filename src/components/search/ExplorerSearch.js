import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './ExplorerSearch.css'

function ExplorerSearch (props) {
  return (
    <input className='explorer-search' type='search' placeholder='Search results:' onChange={e => props.onSearchChanged(e.target.value)} />
  )
}

ExplorerSearch.propTyoes = {
  onSearchChanged: PropTypes.func

}
export default memo(ExplorerSearch)
