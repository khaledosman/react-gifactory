import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import searchIMG from './search.svg'
import './Header.css'

function Header (props) {
  const [search, setSearch] = useState('')
  const handleClick = () => {
    props.onClick({ q: search })
  }

  return (
    <header className='app-header'>
      <div className='header-logo row'>
        <img src={searchIMG} className='col-xs-6 col-med-3 logo left' alt='gifactory' />
        <h2 className='headline col-xs-6 col-med-3 right'><b>Gifactory</b></h2>
      </div>
      <div className='header-main'>
        <h1><b>One place for all things GIFs!</b></h1>
        <div className='search-wrapper'>
          <input className='search' type='search' style={{ width: '100%' }} placeholder='Search for cats, moods and such...' onChange={(e) => setSearch(e.target.value)} />
          <button className='search-btn' onClick={handleClick}> Search </button>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  handleClick: () => console.log('çlicked')
}

Header.propTypes = {
  handleClick: PropTypes.func
}
export default memo(Header)
