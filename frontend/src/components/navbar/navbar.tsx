import React from 'react'
import './navbar.scss'

function Navbar(props: any) {
  return (
    <div className='navbar'>
      <ul className='navbar-nav'>{props.children}</ul>
    </div>
  )
}

export default Navbar
