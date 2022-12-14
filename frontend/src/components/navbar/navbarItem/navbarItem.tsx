import React, { useState } from 'react'
import './navbarItem.scss'

function NavItem(props: any) {
  const [open, setOpen] = useState(false)

  return (
    <li className='navbar__nav__item'>
      <a href={props.href} className='navbar__nav__item__icon' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}

export default NavItem
