import React from 'react'
import { Filters } from './Filters'
import './Header.css'
export  function Header() {

  return (
    <>
    <h1 className='title'> MY APP BOOKS</h1>
    <header>
        <Filters/>
    </header>
    </>
  )
}
