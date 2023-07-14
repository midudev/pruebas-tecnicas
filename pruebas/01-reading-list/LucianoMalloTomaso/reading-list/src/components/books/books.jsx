import './books.css'
import { OpenBookIcon, CloseBookIcon } from '../icons/Icons'

export default function Books ({ books }) {
  const booksToShow = 10

  const checkBookInList = product => {
    return false
    // return books.some(item => item.id === product.id)
  }
  return (
    <main className='books'>
      <ul>
        {books.slice(0, booksToShow).map(book => {
          const isBookInList = checkBookInList()
          return (
            <li key={book.title}>
              <div>{book.title}</div>
              <img className='book-photo' src={book.cover} alt={book.title} loading='lazy' />
              <div>
                <div>Pages: {book.pages}</div>
                <div>Author: {book.author}</div>
              </div>
              <div>
                <button
                  className='addToBookButton'
                >
                  {isBookInList
                    ? <CloseBookIcon />
                    : <OpenBookIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>

    </main>
  )
}
