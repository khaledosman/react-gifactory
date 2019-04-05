import React, { memo } from 'react'
import PropTypes from 'prop-types'

function LoadMoreButton (props) {
  return (
    <button style={{ 'textAlign': 'center' }} className='btn btn-primary' onClick={props.onClick}> load more</button>
  )
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func
}
export default memo(LoadMoreButton)
