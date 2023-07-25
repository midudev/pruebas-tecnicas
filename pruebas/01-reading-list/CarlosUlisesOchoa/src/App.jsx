import { useState } from 'react'
import '@/styles/App.css'
import BookList from '@/components/BookList/BookList'
import ReadingList from '@/components/ReadingList/ReadingList'
import booksData from '@/data/books.json'

function App() {
  let booksArray = booksData && booksData.library?.length > 0 ? booksData.library : []
  booksArray = booksArray.map((item) => item.book)

  const [readingList, setReadingList] = useState([])

  const addBookToReadingList = (book) => {
    // Avoid duplicates in the reading list
    if (!readingList.some((b) => b.title === book.title)) {
      setReadingList([...readingList, book])
    }
  }

  return (
    <>
      <main>
        <div className='books'>
          <h1 className='books__title text-3xl font-bold mb-2'>Books</h1>
          <BookList
            className='books__list'
            books={booksArray}
            readingList={readingList}
            setReadingList={setReadingList}
            onAddBookToReadingListClick={addBookToReadingList}
          />
        </div>
        <ReadingList readingList={readingList} setReadingList={setReadingList} />
      </main>
    </>
  )
}

export default App
