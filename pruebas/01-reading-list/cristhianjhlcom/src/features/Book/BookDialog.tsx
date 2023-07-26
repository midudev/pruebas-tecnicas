import {ForwaredDialog} from '../../components';
import {useBook} from '../../utils/hooks';
import styles from './BookDialog.module.css';

export default function BooksDialog() {
	const {booksDialogRef, bookPreview, handleCloseDialogClick} = useBook();

	return (
		<ForwaredDialog ref={booksDialogRef}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>{bookPreview?.title}</h2>
				<p className={styles.synopsis}>{bookPreview?.synopsis}</p>
				<div className={styles.content}>
					<span className={styles.genre}>Género {bookPreview?.genre}</span>
					<p className={styles.author}>
						{bookPreview?.author?.name} ({bookPreview?.year})
					</p>
				</div>
				<button
					className={styles.button}
					type='button'
					onClick={() => handleCloseDialogClick()}
				>
					Cerrar
				</button>
			</div>
		</ForwaredDialog>
	);
}
