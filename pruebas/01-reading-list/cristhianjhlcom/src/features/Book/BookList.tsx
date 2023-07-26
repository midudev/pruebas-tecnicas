import {Header} from '../../components';
import {useFilters} from '../../utils/hooks';
import styles from './BookList.module.css';
import BookListItem from './BookListItem';

export default function BooksList() {
	const {handleFilteredBooks} = useFilters();

	const datas = handleFilteredBooks();

	if (!datas?.length) {
		return (
			<section className={styles.wrapper}>
				<h2>There is not books for this genre.</h2>
			</section>
		);
	}

	return (
		<div className={styles.wrapper}>
			<Header>({datas.length}) Libros Disponibles</Header>
			<section className={styles.grid}>
				{datas.map((book: LibraryElement) => (
					<BookListItem key={book.book.ISBN} book={book.book} />
				))}
			</section>
		</div>
	);
}
