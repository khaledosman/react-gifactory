import React, { memo } from 'react'
import PropTypes from 'prop-types'

function Card (props) {
  return (
    <img style={{ width: '33%', height: '33%' }} alt='gif' src={props.item.images.downsized_medium.url} load='lazy' />
  )
}

Card.propTypes = {
  item: PropTypes.object
}

export default memo(Card)
