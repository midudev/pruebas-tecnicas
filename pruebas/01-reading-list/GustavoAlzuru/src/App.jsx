import React, { useContext, useEffect } from 'react'
import './App.css'
import Allbooks from '../components/Allbooks'
import Cart from '../components/Cart'
import ListCart from '../components/ListCart'
import useFilterData from '../hooks/useFilter'
import useOpen from '../hooks/useOpen'
import { BooksContext } from '../context/BooksContext'

function App() {
  const { books, cartBooks, handleRemoveBooks, handleBooks, setCartBooks, setBooks } = useContext(BooksContext)
  const { filteredData, handleSelectChange } = useFilterData(books)
  const { handleOpen, isOpen } = useOpen()

  useEffect(() => {
    localStorage.setItem('allBooks', JSON.stringify(books))
    localStorage.setItem('cartBooks', JSON.stringify(cartBooks))
  }, [books, cartBooks])

  useEffect(() => {
    const storedBooks = localStorage.getItem('allBooks')
    const storedCartBooks = localStorage.getItem('cartBooks')

    if (storedBooks) setBooks(JSON.parse(storedBooks)) // <-- Parse the JSON string to an array
    if (storedCartBooks) setCartBooks(JSON.parse(storedCartBooks)) // <-- Parse the JSON string to an array

    const handleStorageChange = (event) => {
      if (event.key === 'allBooks') {
        setBooks(JSON.parse(event.newValue)) // <-- Parse the JSON string to an array
      }
      if (event.key === 'cartBooks') {
        setCartBooks(JSON.parse(event.newValue)) // <-- Parse the JSON string to an array
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])
  return (
    <>
      <h1>Bookpicker</h1>
      <h2>{books.length} books available</h2>
      <label htmlFor="books-genre">Filter by genre:</label>
      <select id="books-genre" onChange={handleSelectChange}>
        <option value="All">All</option>
        <option value="Fantasía">Fantasy</option>
        <option value="Terror">Terror</option>
        <option value="Ciencia ficción">Science Fiction</option>
      </select>
      <Cart handleOpen={handleOpen} cartItems={cartBooks.length} />
      <div className='flex'>
        {books.length ? <Allbooks books={filteredData} handleBooks={handleBooks} /> : <div style={{ flexGrow: '1' }}>No books available</div>}
        {isOpen && <ListCart cartBooks={cartBooks} handleRemoveBooks={handleRemoveBooks} />}
      </div>
    </>
  )
}

export default App
