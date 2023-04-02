import React from 'react'
import '../styles/components/navigationBar.scss'
import {Link} from './Link'

export default function NavigationBar() {

  return (
    <div className='navBar'>
      <div className='navBar-info'>

      <img
        src='favicon.png'
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
    </div>
  )
}
