import useBooks from '../hooks/useBooks';
import styles from './list.module.scss';

export default function List() {
	const { books } = useBooks();

	return (
		<>
			<h2>Avaible Books</h2>
			<ul className={styles.listContainer}>
				{books.map((book) => (
					<li key={book.ISBN} className={styles.bookCover}>
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
