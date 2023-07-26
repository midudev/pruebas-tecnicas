import { useReadingListStore } from '@/store/useReadingListStore'
import '@/styles/App.css'
import BookList from '@/components/BookList/BookList'
import ReadingList from '@/components/ReadingList/ReadingList'

function App() {
  // Use the hook here at the top level of your component
  const addBookToReadingList = useReadingListStore((state) => state.addBookToReadingList)

  const handleAddBook = (book) => {
    addBookToReadingList(book)
  }

  return (
    <>
      <main>
        <div className='books'>
          <h1 className='books__title text-3xl font-bold mb-2'>Books</h1>
          <BookList className='books__list' onAddBookToReadingListClick={handleAddBook} />
        </div>
        <ReadingList />
      </main>
    </>
  )
}

export default App
