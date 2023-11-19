import { type Book } from '../types'
import './BookList.css'

interface Props {
  bookList: Book[]
  removeFromBookList: (book: Book) => void
}

function BookList ({ bookList, removeFromBookList }: Props) {
  return (
    <div className='bookList'>
      <h2>Lista de lectura</h2>
      <ul className='books'>
        {
          bookList.map((book: Book) => {
            return (
              <li className='book-item' key={book.id} >
                <img src={book.cover} alt={book.title}/>
                <label className='deleteButton' onClick={() => { removeFromBookList(book) }}>x</label>
              </li>
            )
          })
          }
      </ul>
    </div>
  )
}

export default BookList
