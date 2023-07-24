import { reset } from '../actions/booksActions'
import { IconButton } from './IconButton'
import { ReadingBook } from './ReadingBook'
import style from './ReadingList.module.css'
import TrashIcon from './icons/TrashIcon'

export function ReadingList({ readingBooks, dispatchBooks, show }) {
	// console.log("--ReadingList");
	// console.log(readingBooks);
	return (
		<aside className={!show ? style.container : style.visible}>
			<header className={style.header}>
				<h2>Lista de lectura</h2>
				<IconButton
					className={style.trash}
					icon={TrashIcon}
					handleClick={() => dispatchBooks(reset())}
					disabled={readingBooks.length === 0}
				/>
			</header>
			{readingBooks.length > 0 ? (
				<ul className={style.list}>
					{readingBooks.map((book, index) => (
						<ReadingBook
							key={book.ISBN}
							book={book}
							index={index}
							dispatchBooks={dispatchBooks}
							style={style}
							readingBooks={readingBooks}
						/>
					))}
				</ul>
			) : (
				<p className={style.void}>Vacía</p>
			)}
		</aside>
	)
}
