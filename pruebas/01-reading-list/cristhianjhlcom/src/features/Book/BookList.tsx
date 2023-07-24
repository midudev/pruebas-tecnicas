import {useContext} from 'react';
import {BookContext} from '../../utils/context';
import styles from './BookList.module.css';
import BookListItem from './BookListItem';

export default function BooksList() {
	const {books, filteredBooks, selectedGenre} = useContext(BookContext);
	const datas = selectedGenre === 'All' ? books : filteredBooks;

	if (!datas.length) {
		return (
			<section className={styles.wrapper}>
				<h2>There is not books for this genre.</h2>
			</section>
		);
	}

	return (
		<section className={styles.wrapper}>
			{datas.map((book: LibraryElement) => (
				<BookListItem key={book.book.ISBN} book={book.book} />
			))}
		</section>
	);
}
