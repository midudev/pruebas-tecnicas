import { useContext, useEffect } from "react";
import { Dialog } from "../../components";
import { BookTypes } from "../../enums";
import { BooksContext } from "../../utils/context/BooksContextProvider";
import styles from "./BooksDialog.module.css";

export default function BooksDialog() {
	const { bookPreview, dispatch, modalRef } = useContext(BooksContext);

	useEffect(() => {
		return () => {
			dispatch({
				type: BookTypes.SELECT_BOOK,
				payload: null,
			});
		};
	}, []);
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
