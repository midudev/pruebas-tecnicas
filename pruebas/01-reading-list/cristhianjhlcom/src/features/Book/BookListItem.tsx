import {HeartIcon} from '../../components/Icons';
import {Book} from '../../interfaces';
import {useBook} from '../../utils/hooks';
import styles from './BookListItem.module.css';

interface Props {
	book: Book;
}

export default function BooksListItem({book}: Props) {
	const {handleAddToFavoriteClick, handlePreviewClick} = useBook();

	return (
		<article className={styles.wrapper}>
			<div className={styles.book}>
				<button
					type='button'
					onClick={() => handleAddToFavoriteClick(book)}
					className={styles.button}
				>
					<HeartIcon className={styles.icon} />
				</button>
				<img className={styles.cover} src={book.cover} alt={book.title} />
			</div>
			<button
				type='button'
				className={styles.previewButton}
				onClick={() => handlePreviewClick(book)}
			>
				Preview
			</button>
		</article>
	);
}
