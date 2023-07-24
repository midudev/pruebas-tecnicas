import { useEffect } from 'react'
import './App.css'
import { useBooksStore } from './store/booksStore'
import Book from './components/Book'
import ReadList from './components/ReadList'
import PageFilter from './components/PageFilter'
import GenreFilter from './components/GenreFilter'
import Header from './components/Header'

function App () {
  const { getBooks, filteredBooks, filters, books } = useBooksStore()

  useEffect(() => {
    const data = window.localStorage.getItem('booksLibrary')
    const isData = JSON.parse(data).state.books.length > 0

    console.log('isdata', JSON.parse(data).state)

    if (!isData) {
      getBooks()
    }
  }, [])

  return (
    <div className='container mx-auto'>
      <Header />

      <div className='flex gap-3'>
        <div className='flex flex-col'>
          <PageFilter />

        </div>

        <div className='flex flex-col'>
          <GenreFilter />
        </div>
      </div>

      <p>Filters {JSON.stringify(filters)}</p>

      <div className='flex'>
        <div className='flex flex-wrap gap-2 w-4/5' id='books'>
          {filteredBooks.map(({ book }) => (
            <Book key={book.ISBN} data={book} />
          ))}
        </div>

        <div className='flex flex-col' id='readList'>
          {books.length}
          <ReadList />
        </div>
      </div>
    </div>
  )
}

export default App
