import { useReadingListStore } from '@/store/useReadingListStore'
import '@/styles/App.css'
import BookList from '@/components/BookList/BookList'
import ReadingList from '@/components/ReadingList/ReadingList'
import { useEffect } from 'react'

function App() {
  useEffect(() => console.log('[R]-------> App component rendered!'), []) // tetemp

  // Use the hook here at the top level of your component
  const addBookToReadingList = useReadingListStore((state) => state.addBookToReadingList)

  const handleAddBook = (book) => {
    addBookToReadingList(book)
  }

  return (
    <main>
      <section className='books'>
        <h1 className='books__title'>Libros</h1>
        <BookList onAddBookToReadingListClick={handleAddBook} />
      </section>
      <ReadingList />
    </main>
  )
}

export default App
