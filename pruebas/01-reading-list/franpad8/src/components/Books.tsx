import { type Book } from '../types'
import './Books.css'

interface Props {
  books: Book[]
  bookList: Book[]
  addToBookList: (book: Book) => void
}

function Books ({ addToBookList, bookList, books }: Props) {
  return <ul id="books" className='books'>
          {
            books.map((book) => {
              const isInBookList = bookList.findIndex(b => b.id === book.id) >= 0
              const itemClass = `book-item${isInBookList ? ' selected' : ''}`
              return (
                <li className={itemClass} key={book.id} onClick={() => { !isInBookList && addToBookList(book) }}>
                  <img src={book.cover} alt={book.title}/>
                </li>
              )
            })
          }
        </ul>
}

export default Books
