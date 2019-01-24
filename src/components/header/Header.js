import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import search from './search.svg'
import './Header.css'

export default class Header extends PureComponent {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.onClick({ q: this.search })
  }

  render () {
    return (
      <header className='app-header'>
        <div className='header-logo row'>
          <img src={search} className='col-xs-6 col-med-3 logo left' alt='gifactory' />
          <h2 className='headline col-xs-6 col-med-3 right'><b>Gifactory</b></h2>
        </div>
        <div className='header-main'>
          <h1><b>One place for all things GIFs!</b></h1>
          <div className='search-wrapper'>
            <input className='search' type='search' style={{ width: '100%' }} placeholder='Search for cats, moods and such...' ref={(input) => { this.search = input }} />
            <button className='search-btn' onClick={this.handleClick}> Search </button>
          </div>
        </div>
      </header>
    )
  }
}

Header.defaultProps = {
  handleClick: () => console.log('çlicked')
}

Header.propTypes = {
  handleClick: PropTypes.func
}
