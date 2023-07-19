import { HeartIcon } from "../../components/Icons";
import { Book } from "../../interfaces/Book";
import styles from "./BooksListItem.module.css";

interface Props {
	book: Book;
}

export default function BooksListItem({ book }: Props) {
	return (
		<article className={styles.book}>
			<button
				type="button"
				onClick={() => console.log("Agregando a favoritos", book.title)}
				className={styles.button}
			>
				<HeartIcon className={styles.icon} />
			</button>
			<img className={styles.cover} src={book.cover} alt={book.title} />
		</article>
	);
}
