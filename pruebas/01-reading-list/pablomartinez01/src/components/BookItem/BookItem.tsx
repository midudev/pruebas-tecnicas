import { AddIcon, CheckIcon } from '../../icons'
import { type Book } from '../../types'
import './bookItem.css'
interface Props {
  book: Book
  isSelected: boolean
  onAdd: (book: Book) => void
}

export const BookItem: React.FC<Props> = ({ book, isSelected, onAdd }) => {
  return (
    <li>
      <img className="cover" src={book.cover} alt={book.title}></img>
      <div className="book-info">
        <header>
          <h4>
            {book.title} - {book.year}
          </h4>
          <h6>{book.author.name}</h6>
          <span className="category">{book.genre}</span>
        </header>
        <main>
          <span>{book.synopsis}</span>
        </main>
        <footer>
          <button
            onClick={() => {
              onAdd(book)
            }}
            className={`button-add ${isSelected ? 'checked' : ''}`}
          >
            {isSelected ? <CheckIcon /> : <AddIcon />}
          </button>
        </footer>
      </div>
    </li>
  )
}
