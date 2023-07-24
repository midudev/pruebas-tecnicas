import {useContext} from 'react';
import {HeartIcon} from '../../components/Icons';
import {BookTypes} from '../../enums';
import {Book} from '../../interfaces';
import {BookContext} from '../../utils/context';
import styles from './BookListItem.module.css';

interface Props {
	book: Book;
}

export default function BooksListItem({book}: Props) {
	const {dispatch, modalRef} = useContext(BookContext);

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
					type='button'
					onClick={() => {
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
				type='button'
				className={styles.previewButton}
				onClick={() => handlePreviewClick(book)}
			>
				Preview
			</button>
		</article>
	);
}
