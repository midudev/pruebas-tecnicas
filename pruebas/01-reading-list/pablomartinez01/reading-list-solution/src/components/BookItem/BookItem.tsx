import { type Book } from '../../types'
import './bookItem.css'
interface Props {
  book: Book
  addBookToList: (book: Book) => void
}

export const BookItem: React.FC<Props> = ({ book, addBookToList }) => {
  return (
    <li>
      <img className="cover" src={book.cover} alt={book.title}></img>
      <div className="book-info">
        <header>
          <h4>
            {book.title} - {book.year}
          </h4>
          <h6>{book.author.name}</h6>
          <span className='category'>{book.genre}</span>
        </header>
        <main>{book.synopsis}</main>
        <footer>
          <button onClick={() => { addBookToList(book) }} className="button-add">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </footer>
      </div>
    </li>
  )
}
