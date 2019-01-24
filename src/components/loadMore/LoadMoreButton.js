import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
export default class LoadMoreButton extends PureComponent {
  render () {
    return (
      <button style={{ 'textAlign': 'center' }} className='btn btn-primary' onClick={this.props.onClick}> load more</button>
    )
  }
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func
}
