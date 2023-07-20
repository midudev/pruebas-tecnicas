import React, { useState } from 'react'
import { library } from '../../books.json'
import './App.css'
import Allbooks from '../components/Allbooks'
import Cart from '../components/Cart'
import ListCart from '../components/ListCart'

function App() {
  const [books, setBooks] = useState(library)
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <>
      <h1>Bookpicker</h1>
      <h2>{books.length} books available</h2>
      <label htmlFor="books-genre">Filter by genre:</label>
      <select id="books-genre">
        <option value="all">All</option>
        <option value="comedy">comedy</option>
        <option value="terror">terror</option>
        <option value="love">love</option>
      </select>
      <Cart handleOpen={handleOpen}/>
      <div className='flex'>
        <Allbooks books={books} />
        {open &&  <ListCart />}
      </div>
    </>
  )
}

export default App
