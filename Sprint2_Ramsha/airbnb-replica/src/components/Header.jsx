import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img className="header_icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt='Airbnb logo'
        />
      </Link>

      <div className='header_center'>
          <input type='text'></input>
          <SearchIcon className='search_icon' />
      </div>

      <div className='header_right1'>
          <p>Airbnb your home</p>
          <LanguageIcon />

              <div className='header_right2'>
                  <MenuIcon />
                  <AccountCircleIcon />
              </div>
      </div>

      


    </div>
  )
}

export default Header