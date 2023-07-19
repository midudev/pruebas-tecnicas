import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// eslint-disable-next-line import/no-absolute-path
// import viteLogo from '/vite.svg'
import { library } from '../data/books.json'
import Book from '../src/components/book.jsx'
import Filter from '../src/components/Filter'
import './App.css'

function App () {
  const [filters, setFilters] = useState({
    genre: 'all',
    pages: 0
  })
  const filterBooks = (library) => {
    return library.filter(item => {
      return (
        (
          item.book.genre === filters.genre || filters.genre === 'all'
        ) &&
        item.book.pages >= filters.pages
      )
    })
  }
  return (
    <>
      <header>
        <h1>Colección de libros</h1>
        <Filter changeFilters={setFilters} />
      </header>
      <Book books = {filterBooks(library)} />
    </>

  )
}

export default App
