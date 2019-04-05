import PropTypes from 'prop-types'
import React, { memo } from 'react'
// import {Col} from 'react-bootstrap'
import Card from '../Card/Card'

function Explorer (props) {
  const handleClick = () => {
    props.handleClick()
  }

  return (
    <section>
      <ul>{props.results.map(result => <Card key={result.id} item={result} onClick={handleClick} />)}</ul>
      <h2>{props.isBusy}</h2>
      <h2>{props.error}</h2>
    </section>
  )
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

export default memo(Explorer)
