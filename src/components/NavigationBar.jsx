import React from 'react'
import '../styles/components/navigationBar.scss'
import {Link} from './Link'

export default function NavigationBar() {
  return (
    <nav className='navBar'>
      <div className='navBar-links'>
      <Link to='/search'>Búsqueda</Link>
      <Link to='/mylist'>Mi Lista</Link>
      <Link to='/search'>Búsqueda</Link>
      </div>
    
    
    </nav>
  )
}
