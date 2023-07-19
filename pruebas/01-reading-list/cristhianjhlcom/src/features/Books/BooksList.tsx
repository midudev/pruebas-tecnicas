import { useContext } from "react";
import { LibraryElement } from "../../interfaces/Library";
import { BooksContext } from "../../utils/context/BooksContextProvider";
import styles from "./BooksList.module.css";
import BooksListItem from "./BooksListItem";

export default function BooksList() {
	const { libraryState } = useContext(BooksContext) as BooksContext;

	return (
		<section className={styles.wrapper}>
			{libraryState.data.map((book: LibraryElement) => (
				<BooksListItem key={book.book.ISBN} book={book.book} />
			))}
		</section>
	);
}
