import { useMemo } from 'react';
import useBooks from '../hooks/useBooks';
import { BooksRepo } from '../services/books.repo';
import styles from './list.module.scss';
import { BookId } from '../../store/books/slice';

export default function List() {
	const repo = useMemo(() => new BooksRepo(), []);
	const { books, deleteBook } = useBooks(repo);

	const handleRemoveBook = (id: BookId) => {
		deleteBook(id);
	};

	return (
		<>
			<h2>Avaible Books</h2>
			<ul className={styles.listContainer}>
				{books.map((book) => (
					<li key={book.isbn} className={styles.bookCover}>
						<button onClick={() => handleRemoveBook(book.isbn)}>X</button>
						<img
							width={240}
							height={380}
							src={book.cover}
							alt={'Cover of the book ' + book.title + ' by ' + book.author}
						></img>
					</li>
				))}
			</ul>
		</>
	);
}
