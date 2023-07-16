import './books.css'
import { OpenBookIcon, CloseBookIcon } from '../icons/Icons'
import { useListOfLecture } from '../../hooks/useListOfLecture'

export default function Books ({ books }) {
  const booksToShow = 10
  const { list, addToLectureList, removeFromLectureList } = useListOfLecture()

  const checkBookInList = book => {
    // return false
    return list.some(item => item.title === book.title)
  }
  return (
    <main className='books'>
      <ul>
        {books.slice(0, booksToShow).map(book => {
          const isBookInList = checkBookInList(book)
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
                  onClick={() => {
                    isBookInList
                      ? removeFromLectureList(book)
                      : addToLectureList(book)
                  }}
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
