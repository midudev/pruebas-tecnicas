import { RemoveIcon } from '../../icons'
import { type Book } from '../../types'
import './readItem.css'

interface Props {
  book: Book
  onRemove: () => void
}

export const ReadItem: React.FC<Props> = ({ book, onRemove }) => {
  return (
    <li className="read-list-item" key={book.ISBN}>
      <img src={book.cover} alt={book.title} />
      <div>
        <h2>{book.title} - {book.year}</h2>
        <h4>{book.author.name}</h4>
        <span className="category">{book.genre}</span>
        <p>{book.synopsis}</p>
        <button onClick={() => { onRemove() }} className='remove-button'>
          <RemoveIcon />
        </button>
      </div>
    </li>
  )
}
