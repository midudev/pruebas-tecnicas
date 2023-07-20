import { useContext } from "react";
import { Dialog } from "../../components";
import { BooksContext } from "../../utils/context/BooksContextProvider";
import styles from "./BooksDialog.module.css";

export default function BooksDialog() {
	const { bookPreview, modalRef } = useContext(BooksContext);

	return (
		<Dialog data={bookPreview}>
			<h2 className={styles.title}>{bookPreview?.title}</h2>
			<p className={styles.synopsis}>{bookPreview?.synopsis}</p>
			<div className={styles.content}>
				<span className={styles.genre}>Género {bookPreview?.genre}</span>
				<p className={styles.author}>
					{bookPreview?.author.name} ({bookPreview?.year})
				</p>
			</div>
			<button className={styles.button} type="button">
				Cerrar
			</button>
		</Dialog>
	);
}
