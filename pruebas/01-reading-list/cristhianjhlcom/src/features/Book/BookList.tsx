import { useContext } from "react";
import { BookContext } from "../../utils/context";
import styles from "./BookList.module.css";
import BookListItem from "./BookListItem";

export default function BooksList() {
	const { books } = useContext(BookContext);

	return (
		<section className={styles.wrapper}>
			{books.map((book: LibraryElement) => (
				<BookListItem key={book.book.ISBN} book={book.book} />
			))}
		</section>
	);
}
