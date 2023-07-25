import { v4 as uuidv4 } from 'uuid'
import Book from '@/components/Book/Book'
import '@/components/BookList/BookList.css'

const BookList = ({
  books,
  readingList,
  setReadingList,
  onAddBookToReadingListClick,
}) => {
  // Filter out the books that are already in the reading list
  const availableBooks = books.filter((book) => !readingList.includes(book))

  return (
    <div className='books'>
      <div className='grid-container'>
        {availableBooks.map((book) => (
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
