import { getBooks } from './utils/books'
import { useReadingList } from './hooks/useReadingList'
import { useFilters } from './hooks/useFilters'
import { Books } from './components/Books'
import { ReadingList } from './components/ReadingList'

function App () {
  const books = getBooks()
  const { state } = useReadingList()
  const { filterBooks } = useFilters()

  const showSidebar = state.length > 0
  const filteredBooks = filterBooks(books)

  return (
    <>
      <h1 className='text-5xl font-bold text-center my-10'>Reading List</h1>
      <main className='container mx-auto my-5 flex'>
        <Books books={filteredBooks} />
        <ReadingList isDisplay={showSidebar} books={state} />
      </main>
    </>
  )
}

export default App
