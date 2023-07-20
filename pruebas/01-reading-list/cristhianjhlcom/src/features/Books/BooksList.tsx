import { useContext } from "react";
import { BooksContext } from "../../utils/context/BooksContextProvider";
import styles from "./BooksList.module.css";
import BooksListItem from "./BooksListItem";

export default function BooksList() {
	const { books } = useContext(BooksContext);

	return (
		<section className={styles.wrapper}>
			{books.map((book: LibraryElement) => (
				<BooksListItem key={book.book.ISBN} book={book.book} />
			))}
		</section>
	);
}
