import { useEffect, useState } from 'react'
import Book from '@/components/Book/Book'
import '@/components/BookList/BookList.css'
import { useReadingListStore } from '@/store/useReadingListStore'
import { useBooksStore } from '@/store/useBooksStore'

const BookList = ({ onAddBookToReadingListClick }) => {
  useEffect(() => console.log('[R]-------> BookList component rendered!'), []) // tetemp

  const bookList = useBooksStore((state) => state.books)
  const readingList = useReadingListStore((state) => state.readingList)
  const [availableBooksState, setAvailableBooksState] = useState([])

  useEffect(() => {
    const availableBooks = bookList.filter((book) => {
      return !readingList.find((readingBook) => readingBook.ISBN === book.ISBN)
    })
    setAvailableBooksState(availableBooks)
  }, [readingList, bookList])

  return (
    <ul className='books__container'>
      {availableBooksState.map((book) => (
        <li className='books__element' key={book.ISBN}>
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
