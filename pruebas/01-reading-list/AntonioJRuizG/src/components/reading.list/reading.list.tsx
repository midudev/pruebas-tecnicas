import { useMemo } from 'react';
import useBooks from '../../hooks/useBooks';
import { BooksRepo } from '../services/books.repo';
import styles from './reading.list.module.scss';
import { BookProps } from '../model/book';

export default function ReadingList() {
	const repo = useMemo(() => new BooksRepo(), []);
	const { books, selectBook, booksCount } = useBooks(repo);

	const handleSelectBook = (book: BookProps) => {
		const updatedBook = { ...book, isSelected: false };
		selectBook(updatedBook);
	};

	return (
		<section className={styles.readingListContainer}>
			<h2>Reading list</h2>
			{booksCount.selectedBooks > 0 ? (
				<ul className={styles.listContainer}>
					{books.length > 0
						? books.map((book: BookProps) =>
								book.isSelected ? (
									<li
										key={book.book.isbn}
										className={styles.bookCoverContainer}
									>
										<button
											className={styles.selectButton}
											onClick={() => handleSelectBook(book)}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='black'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='white'
												className='w-6 h-6'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
												/>
											</svg>
										</button>

										<img
											className={styles.bookCover}
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
								) : null
						  )
						: null}
				</ul>
			) : (
				<p>Looks like your reading list is as blank as a Muggle's spellbook.</p>
			)}
		</section>
	);
}
