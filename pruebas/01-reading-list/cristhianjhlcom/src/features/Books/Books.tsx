import styles from "./Books.module.css";
import BooksDialog from "./BooksDialog";
import BooksList from "./BooksList";

export default function Books() {
	return (
		<div className={styles.wrapper}>
			<BooksList />
			<BooksDialog />
		</div>
	);
}
