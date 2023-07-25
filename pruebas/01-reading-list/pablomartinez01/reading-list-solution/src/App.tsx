import { useState } from 'react'
import './App.css'
import { BookList } from './components/BookList/BookList'
import { Filters } from './components/Filters/Filters'
import { Footer } from './components/Footer/Footer'
import { ReadList } from './components/ReadList/ReadList'
import { useFilters } from './hooks/useFilters'
import { useReadList } from './hooks/useReadList'
import { useWindows } from './hooks/useWindows'
import bookList from './mocks/books.json'
import { type Book } from './types'

const initialState: Book[] = bookList.library.map(item => item.book)

const App: React.FC = () => {
  const [books] = useState(initialState)
  const { displayReadList, displayFilters, toggleFilters, toggleReadList } = useWindows()

  const { filterBooks } = useFilters()
  const { readBooks } = useReadList()

  const filteredBooks = filterBooks(books)
  const filteredReadBooks = filterBooks(readBooks)

  const totalBooks = filteredBooks.length
  const booksInReadList = filteredReadBooks.length

  return (
    <div className='app'>

      <ReadList display={displayReadList} />
      <Filters booksInList={booksInReadList} available={totalBooks - booksInReadList} displayFilters={displayFilters}></Filters>

      <BookList books={filteredBooks}/>
      <Footer toggleReadList={toggleReadList} toggleFilters={toggleFilters} />
    </div>
  )
}

export default App
