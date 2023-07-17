import { useMemo } from 'react';
import useBooks from '../hooks/useBooks';
import { BooksRepo } from '../services/books.repo';
import styles from './list.module.scss';
import { BookProps } from '../model/book';

export default function List() {
	const repo = useMemo(() => new BooksRepo(), []);
	const { books, selectBook } = useBooks(repo);
	console.log(books);

	const handleSelectBook = (book: BookProps) => {
		const updatedBook = { ...book, isSelected: true };
		console.log(updatedBook);
		selectBook(updatedBook);
	};

	return (
		<>
			<h2>Avaible Books</h2>
			<ul className={styles.listContainer}>
				{books.map((book) => (
					<li key={book.book.isbn} className={styles.bookCover}>
						{!book.isSelected ? (
							<button
								className={styles.selectButton}
								onClick={() => handleSelectBook(book)}
							>
								+
							</button>
						) : null}
						<img
							width={240}
							height={380}
							src={book.book.cover}
							alt={
								'Cover of the book ' +
								book.book.title +
								' by ' +
								book.book.author
							}
						></img>
					</li>
				))}
			</ul>
		</>
	);
}
