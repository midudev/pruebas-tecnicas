import ReadingList from './components/ReadingList'
import Books from './components/Books'
import { useEffect } from 'react'
import booksData from '../../books.json'
import { Book, Library } from './interfaces/Book'
import { useLocalStorage } from './hooks/useLocalStorage'

const App = () => {
  const [bookList, setBookList] = useLocalStorage<Library>('books', {
    library: [],
  })

  useEffect(() => {
    if (bookList.library.length > 0) {
      return
    }
    setBookList(booksData)
  }, [])

  const [readingList, setReadingList] = useLocalStorage<Book[]>(
    'readingList',
    []
  )

  // LOGIC TO ADD BOOK TO READING LIST AND REMOVE BOOK FROM LIBRARY
  const addToReadingList = (book: Book) => {
    const isBookInReadingList = readingList.some(b => b.ISBN === book.ISBN)

    if (!isBookInReadingList) {
      setReadingList([...readingList, book])
    }

    if (bookList) {
      const updatedLibrary = bookList.library.filter(
        b => b.book.ISBN !== book.ISBN
      )
      setBookList({
        ...bookList,
        library: updatedLibrary,
      })
    }
  }

  // LOGIC TO REMOVE BOOK FROM READING LIST AND ADD BOOK TO LIBRARY
  const addToBookList = (book: Book) => {
    if (bookList) {
      const isBookInReadingList = readingList.some(b => b.ISBN === book.ISBN)

      if (isBookInReadingList) {
        const updatedReadingList = readingList.filter(b => b.ISBN !== book.ISBN)
        setReadingList(updatedReadingList)
      }

      const isBookInLibrary = bookList.library.some(
        b => b.book.ISBN === book.ISBN
      )
      if (!isBookInLibrary) {
        const updatedLibrary = [...bookList.library, { book }]
        setBookList({
          ...bookList,
          library: updatedLibrary,
        })
      }
    }
  }

  return (
    <div className='bg-[#F1E5D2] h-screen'>
      <div className='container mx-auto w-5/6 lg:w-3/5 py-10'>
        <div className='bg-[#F7F3EE] rounded-3xl shadow-2xl'>
          {/* READING LIST COMPONENT */}
          <ReadingList
            titleSection='Reading List'
            readingList={readingList}
            addToBookList={addToBookList}
          />
        </div>
        <div className='bg-[#F7F3EE] rounded-3xl shadow-2xl mt-4'>
          {/* BOOKS COMPONENT */}
          {bookList ? (
            <Books
              bookList={bookList}
              titleSection='Library'
              addToReadingList={addToReadingList}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
