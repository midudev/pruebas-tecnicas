import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Book from '@/components/Book/Book'
import '@/components/BookList/BookList.css'
import { useReadingListStore } from '@/store/useReadingListStore'
import { useBooksStore } from '@/store/useBooksStore'

const BookList = ({ onAddBookToReadingListClick }) => {
  const [availableBooksState, setAvailableBooksState] = useState([])

  const bookList = useBooksStore((state) => state.books)

  const readingList = useReadingListStore((state) => state.readingList)

  useEffect(() => {
    const availableBooks = bookList.filter((book) => !readingList.includes(book))
    setAvailableBooksState(availableBooks)
  }, [bookList, readingList])

  return (
    <div className='books'>
      <div className='grid-container'>
        {availableBooksState.map((book) => (
          <Book
            key={uuidv4()}
            data={book}
            onAddBookToReadingListClick={() => onAddBookToReadingListClick(book)}
          />
        ))}
      </div>
    </div>
  )
}

export default BookList
