import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <header>
      <div className='search'>
        <span className='search-icon'>
          <SearchIcon style={{fontSize: '1.1rem'}} />
        </span>
        <span className='search-input'>
          Omer Gaizinger
        </span>
      </div>
    </header>
  )
}

export default Header