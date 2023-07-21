import { useState } from 'react'
import { Link } from 'wouter'
import logo from './../assets/logo.png'

import { MobileMenu } from './MobileMenu'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const toggleIcon = () => {
    return showMenu
      ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>)
      : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>)
  }

  return (
    <header className="z-10 w-full h-16 px-4 fixed bg-bg-alt border-b-2 border-b-title lg:px-12">
      <nav className="w-full h-full">
        <ul className="flex justify-between items-center h-full">
          <li onClick={() => { setShowMenu(false) }}>
            <Link href="/">
              <img className="cursor-pointer" width={112} src={logo} alt="Logo" />
            </Link>
          </li>
          <li className="cursor-pointer" onClick={toggleMenu}>
            {toggleIcon()}
          </li>
        </ul>
      </nav>
      <MobileMenu show={showMenu} toggleMenu={toggleMenu}/>
  </header>
  )
}
