import { useContext } from "react";
import { HeartIcon } from "../../components/Icons";
import { BookTypes } from "../../enums";
import { Book } from "../../interfaces/Book";
import { BooksContext } from "../../utils/context/BooksContextProvider";
import styles from "./BooksListItem.module.css";

interface Props {
	book: Book;
}

export default function BooksListItem({ book }: Props) {
	const { dispatch, modalRef } = useContext(BooksContext);

	function handlePreviewClick(book) {
		dispatch({
			type: BookTypes.SELECT_BOOK,
			payload: book,
		});
	}

	return (
		<article className={styles.wrapper}>
			<div className={styles.book}>
				<button
					type="button"
					onClick={() => {
						console.log(book);
						dispatch({
							type: BookTypes.ADD_TO_FAVORITE,
							payload: book,
						});
					}}
					className={styles.button}
				>
					<HeartIcon className={styles.icon} />
				</button>
				<img className={styles.cover} src={book.cover} alt={book.title} />
			</div>
			<button
				type="button"
				className={styles.previewButton}
				onClick={() => handlePreviewClick(book)}
			>
				Preview
			</button>
		</article>
	);
}
