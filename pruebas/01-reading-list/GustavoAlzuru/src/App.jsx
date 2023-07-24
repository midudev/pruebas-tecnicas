import React, { useState } from 'react'
import { library } from '../../books.json'
import './App.css'
import Allbooks from '../components/Allbooks'
import Cart from '../components/Cart'
import ListCart from '../components/ListCart'

function App() {
  const [books, setBooks] = useState(library)
  const [cartBooks, setCartBooks] = useState([])
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  const handleBooks = (infoBook) => {
    setCartBooks([...cartBooks, infoBook])
    setBooks(books.filter(book => book.book.ISBN !== infoBook.book.ISBN))
  }
  const handleRemoveBooks = (bookToRemove) => {
    setBooks([...books, bookToRemove])
    setCartBooks(cartBooks.filter(book => book.book.ISBN !== bookToRemove.book.ISBN))
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
      <Cart handleOpen={handleOpen} cartItems={cartBooks.length}/>
      <div className='flex'>
        {books.length ? <Allbooks books={books} handleBooks={handleBooks}/> : <div style={{flexGrow: '1'}}>No books available</div>}
        {open && <ListCart cartBooks={cartBooks} handleRemoveBooks={handleRemoveBooks}/>}
      </div>
    </>
  )
}

export default App
