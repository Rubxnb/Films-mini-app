import React, { useEffect, useState } from 'react'
import '../styles/components/navigationBar.scss'
import {Link} from './Link'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function NavigationBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownStyle, setDropdownStyle] = useState({height: '0px'})
  
  useEffect(() => {
    
    if(dropdownOpen)
      setDropdownStyle({height: '120px'}) 
    else
      setDropdownStyle({height: '0px'}) 

  }, [dropdownOpen])
  

  function handleClick() {
    setDropdownOpen(!dropdownOpen)
  }


  return (
    <section>
      <div className='navBar'>
        <div className='navBar-info'>

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
        onClick={handleClick}>
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
