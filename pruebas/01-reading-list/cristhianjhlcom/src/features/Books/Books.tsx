import styles from "./Books.module.css";
import BooksList from "./BooksList";

export default function Books() {
	return (
		<div className={styles.wrapper}>
			<BooksList />
		</div>
	);
}
