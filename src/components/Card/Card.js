import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
export default class Card extends PureComponent {
//   constructor (props) {
//     super(props)
//   }

  render () {
    return (
      <img style={{width: '33%', height: '33%' }} src={this.props.item.images.downsized_large.url} alt='image' />
    )
  }
}

Card.propTypes = {
  item: PropTypes.object
}
