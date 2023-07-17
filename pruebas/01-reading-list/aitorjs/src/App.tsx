import React, { useEffect, useState } from 'react'
import './App.css'
import { useBooksStore } from './store/booksStore'
import Book from './components/Book'

function App () {
  const { getBooks, setBooks, books, filterBooks } = useBooksStore() as any
  const [filters, setFilters] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  useEffect(() => {
    let _books = books
    Object.keys(filters).map(f => {
      _books = _books.filter((d) => {
        if (f === 'pages') {
          return d.book[f] <= filters[f]
        } else { // genre
          return d.book[f] === filters[f]
        }
      })
      setBooks(_books)
    })
  }, [filters])

  const filterGenreBooks = (genre: string) => {
    genre !== '' ? setFilters({ ...filters, genre }) : setBooks(books)
  }

  const filterPageBooks = (pages: number) => {
    setFilters({ ...filters, pages })
  }

  return (
    <>
      <h1 className='text-6xl font-bold'>Librería de libros</h1>

      <h2>{filterBooks.length} libros disponibles</h2>

      <div className='flex gap-3'>
        <div className='flex flex-col'>
          <label htmlFor='pageFilter'>Filtrar por páginas</label>
          <input
            type='range'
            min='100'
            max='1500'
            id='pageFilter'
            name='pageFilter'
            onChange={(e) => filterPageBooks(Number(e.target.value))}
          />
          {filters.pages > 0 && <span>PAGES {filters.pages}</span>}
        </div>

        <div className='flex flex-col'>
          <label htmlFor='genreFilter'>Filtrar por género</label>

          <select onChange={(e) => filterGenreBooks(e.target.value)}>
            <option value=''>Todas las categorías</option>
            <option value='Fantasía'>Fantasía</option>
            <option value='Ciencia ficción'>Ciencia ficción</option>
            <option value='Zombies'>Zombies</option>
            <option value='Terror'>Terror</option>
          </select>
          {filters.genre && <span>GENRE {filters.genre}</span>}
        </div>
      </div>

      <>
        <div className='flex flex-wrap gap-3'>
          {filterBooks.map(({ book }) => (
            <Book key={book.ISBN} data={book} />
          ))}
        </div>
      </>
    </>
  )
}

export default App
