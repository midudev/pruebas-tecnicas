import { useMemo, useState } from 'react'
import { Toaster } from 'react-hot-toast'
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
  const { displayReadList, displayFilters, toggleFilters, toggleReadList } = useWindows()
  const { filters, filterBooks } = useFilters()
  const [books] = useState(initialState)
  const { readBooks } = useReadList()

  const filteredBooks = useMemo(() => { return filterBooks(books) }, [filters])
  const filteredReadBooks = useMemo(() => { return filterBooks(readBooks) }, [filters, readBooks])

  const totalBooks = filteredBooks.length
  const booksInReadList = filteredReadBooks.length

  return (
    <div className='app'>
      <Toaster position="top-right" reverseOrder={false}/>
      <ReadList display={displayReadList} />
      <BookList books={filteredBooks}/>
      <Filters booksInList={booksInReadList} available={totalBooks - booksInReadList} displayFilters={displayFilters}></Filters>
      <Footer toggleReadList={toggleReadList} toggleFilters={toggleFilters} />
    </div>
  )
}

export default App
