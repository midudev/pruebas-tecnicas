import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Book from '@/components/Book/Book'
import '@/components/BookList/BookList.css'

const BookList = ({ books }) => {
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    const fetchBooks = () => {
      const myBooks = books && Array.isArray(books) ? books : []
      setBookList(myBooks)
    }

    fetchBooks()
  }, [])

  return (
    <div className='books'>
      <div className='grid-container'>
        {bookList.map((book) => (
          <Book key={uuidv4()} data={book} />
        ))}
      </div>
    </div>
  )
}

export default BookList
