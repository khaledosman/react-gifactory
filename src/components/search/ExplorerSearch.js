import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './ExplorerSearch.css'

export default class ExplorerSearch extends PureComponent {
  render () {
    return (
      <input className='explorer-search' type='search' placeholder='Search results:' onChange={this.props.onSearchChanged} />
    )
  }
}

ExplorerSearch.propTyoes = {
  onSearchChanged: PropTypes.func

}
