import { addBook } from '../actions/booksActions'
import BookMarkIcon from './icons/BookMarkIcon'

export function Book({ book, dispatchBooks, style }) {
	return (
		<li className={book.isReading ? style.disabled : style.book}>
			<img
				onClick={() => dispatchBooks(addBook(book.ISBN))}
				src={book.cover}
				alt={`Portada del libro ${book.title}`}
			/>
			{book.isReading && <BookMarkIcon className={style.icon} />}
		</li>
	)
}
