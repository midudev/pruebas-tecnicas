import {
	downgradePreference,
	removeBook,
	upgradePreference
} from '../actions/booksActions'
import { IconButton } from './IconButton'
import ArrowDownIcon from './icons/ArrowDownIcon'
import ArrowUpIcon from './icons/ArrowUpIcon'
import CloseIcon from './icons/CloseIcon'

export function ReadingBook({
	book,
	index,
	style,
	dispatchBooks,
	readingBooks
}) {
	return (
		<li className={style.book} key={book.ISBN}>
			<img src={book.cover} alt={book.title} />
			<div className={style.iconsContainer}>
				<IconButton
					className={style.delete}
					icon={CloseIcon}
					handleClick={() => dispatchBooks(removeBook(book.ISBN))}
					aria-label='delete'
				/>
				<IconButton
					className={style.up}
					icon={ArrowUpIcon}
					handleClick={() => dispatchBooks(upgradePreference(book.ISBN))}
					disabled={index === 0}
					aria-label='upgrade'
				/>
				<IconButton
					className={style.down}
					icon={ArrowDownIcon}
					handleClick={() => dispatchBooks(downgradePreference(book.ISBN))}
					disabled={index === readingBooks.length - 1}
					aria-label='downgrade'
				/>
			</div>
		</li>
	)
}
