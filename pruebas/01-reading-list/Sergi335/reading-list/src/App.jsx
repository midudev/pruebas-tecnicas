import { useState } from 'react'
import { library } from '../data/books.json'
import Book from '../src/components/book.jsx'
import Filter from '../src/components/Filter'
import './App.css'
import ReadingList from './components/ReadingList'
import { ReadingListContext, ReadingListProvider } from './context/ReadListContext'

function App () {
  const [filters, setFilters] = useState({
    genre: 'all',
    pages: 0
  })

  const filterBooks = library => {
    return library.filter(item => {
      return (
        (item.book.genre === filters.genre || filters.genre === 'all') &&
        item.book.pages >= filters.pages
      )
    })
  }

  return (
    <ReadingListProvider>
      <ReadingListContext.Consumer>
        {context => {
          const { list } = context || {}

          console.log(context)
          const number = filterBooks(library)
          console.log(number.length)

          return (
            <>
              <header>
                <h1>Colección de libros</h1>
                <Filter changeFilters={setFilters} />
                <span>Libros Disponibles: {number.length - list.length}</span>
              </header>
              <Book books={filterBooks(library)} />
              <ReadingList />
            </>
          )
        }}
      </ReadingListContext.Consumer>
    </ReadingListProvider>
  )
}

export default App
