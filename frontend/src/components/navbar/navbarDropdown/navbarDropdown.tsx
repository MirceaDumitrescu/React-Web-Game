import React, { useEffect, useState } from 'react'
import './navbarDropdown.scss'
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as ProfileIcon } from '../../../assets/profile_icon.svg'
import { ReactComponent as CharIcon } from '../../../assets/character_icon.svg'
import { ReactComponent as LogoutIcon } from '../../../assets/logout_icon.svg'
import { ReactComponent as NewCharIcon } from '../../../assets/new_char_icon.svg'

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)

  function calcHeight(el: any) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }
  function DropdownItem(props: any) {
    return (
      <a
        href={props.href}
        className='dropdown__menu__item'
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className='dropdown__menu__item__icon'>{props.leftIcon}</span>
        {props.children}
        <span className='dropdown__menu__item__icon'>{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className='dropdown'>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames='menu__primary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='dropdown__menu'>
          <DropdownItem leftIcon={<ProfileIcon />}>MyProfile</DropdownItem>
          <DropdownItem leftIcon={<CharIcon />}>Character Overview</DropdownItem>
          <DropdownItem leftIcon={<NewCharIcon />}>Create New Character</DropdownItem>
          <DropdownItem leftIcon={<LogoutIcon />}>Log Out</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

export default DropdownMenu
