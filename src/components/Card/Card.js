import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
export default class Card extends PureComponent {
//   constructor (props) {
//     super(props)
//   }

  render () {
    return (
      <img style={{ width: '33%', height: '33%' }} alt='gif' src={this.props.item.images.downsized_large.url} />
    )
  }
}

Card.propTypes = {
  item: PropTypes.object
}
