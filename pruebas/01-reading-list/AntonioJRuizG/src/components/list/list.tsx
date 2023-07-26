import { useMemo } from 'react';
import useBooks from '../../hooks/useBooks';
import { BooksRepo } from '../services/books.repo';
import styles from './list.module.scss';
import { BookProps } from '../model/book';

export default function List() {
	const repo = useMemo(() => new BooksRepo(), []);
	const { filteredBooks, selectBook } = useBooks(repo);

	const handleSelectBook = (book: BookProps) => {
		const updatedBook = { ...book, isSelected: true };
		selectBook(updatedBook);
	};

	return (
		<section>
			{filteredBooks.length > 0 ? (
				<ul className={styles.listContainer}>
					{filteredBooks.map((book: BookProps) => (
						<li key={book.book.isbn} className={styles.bookCover}>
							<button
								className={
									(book.isSelected && styles.selectButtonOff) +
									' ' +
									styles.selectButtonOn
								}
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
										d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
							</button>

							<img
								className={
									(book.isSelected && styles.bookCoverOn) +
									' ' +
									styles.bookCoverOff
								}
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
			) : (
				<p>
					Well, it seems like the library has been hit by a case of book
					invisibility charms
				</p>
			)}
		</section>
	);
}
