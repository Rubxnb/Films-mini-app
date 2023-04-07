import React from 'react'
import '../styles/components/navigationBar.scss'
import {Link, navigate} from './Link'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useDropDown from '../hooks/useDropDown'

export default function NavigationBar() {
  
  const {dropdownOpen, dropdownChangeState, dropdownStyle} = useDropDown()

  return (
    <section>
      <div className='navBar'>
        <div className='navBar-info' 
            onClick={() => navigate('/Movies-mini-app/')}>
          <img
            src='./favicon.png'
            alt='Logo Movies'
            height='50'
          />
          <h1>Movies <br/> MiniApp</h1>

        </div>

        <div className='navBar-links'>
          <Link to='/Movies-mini-app/'>Inicio</Link>
          <Link to='/Movies-mini-app/search'>Búsqueda</Link>
          <Link to='/Movies-mini-app/mylist'>Mi Lista</Link>
        </div>
        <div className='navBar-dropdown-menu'
        onClick={dropdownChangeState}>
          {
            dropdownOpen
            ? <CloseIcon className='navBar-dropdown-menu-button' fontSize='large'/>
            : <MenuIcon className='navBar-dropdown-menu-button' fontSize='large'/>
          }
        </div>
      </div>
      <div className='dropdown-links' style={dropdownStyle}>
        <div className='dropdown-links-list'>
          <Link to='/Movies-mini-app/'>Inicio</Link>
          <Link to='/Movies-mini-app/search'>Búsqueda</Link>
          <Link to='/Movies-mini-app/mylist'>Mi Lista</Link>

        </div>
      </div>
    </section>
    
  )
}
