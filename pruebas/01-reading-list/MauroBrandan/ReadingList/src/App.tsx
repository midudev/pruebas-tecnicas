import { getBooks } from './utils/books'
import { useFilters } from './hooks/useFilters'
import { Books } from './components/Books'
import { ReadingList, ReadingListButton } from './components/ReadingList'

function App () {
  const books = getBooks()
  const { filterBooks } = useFilters()
  const filteredBooks = filterBooks(books)

  return (
    <>
      <h1 className='text-5xl font-bold text-center my-10'>Reading List</h1>
      <main className='container mx-auto my-5 flex'>
        <Books books={filteredBooks} />
        <ReadingList />
        <ReadingListButton />
      </main>
    </>
  )
}

export default App
