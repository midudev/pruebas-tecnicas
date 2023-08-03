import { useEffect, useState } from 'react'
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
    <ul className='books__container'>
      {availableBooksState.map((book) => (
        <li key={book.ISBN}>
          <Book
            data={book}
            onAddBookToReadingListClick={() => onAddBookToReadingListClick(book)}
          />
        </li>
      ))}
    </ul>
  )
}

export default BookList
