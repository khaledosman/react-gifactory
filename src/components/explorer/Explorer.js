import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
// import {Col} from 'react-bootstrap'
import Card from '../Card/Card'

export default class Explorer extends PureComponent {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.handleClick()
  }

  render () {
    const results = this.props.results.map(result => {
      return (
        <Card key={result.id} item={result} />
      )
    })
    return (
      <section>
        <ul>{results}</ul>
        <h2>{this.props.isBusy}</h2>
        <h2>{this.props.error}</h2>
      </section>
    )
  }
}

Explorer.defaultProps = {
  results: [],
  isBusy: false,
  error: '',
  handleClick: () => {
    console.log('clicked')
  }
}

Explorer.propTypes = {
  results: PropTypes.array,
  isBusy: PropTypes.bool,
  error: PropTypes.string,
  handleClick: PropTypes.func
}
