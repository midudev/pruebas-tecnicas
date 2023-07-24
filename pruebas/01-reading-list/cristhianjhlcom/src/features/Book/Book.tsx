import {useContext} from 'react';
import {Header} from '../../components';
import {Select} from '../../components/Select';
import {BookTypes} from '../../enums';
import {BookContext} from '../../utils/context';
import {Favorite} from '../Favorite';
import styles from './Book.module.css';
import BookDialog from './BookDialog';
import BookList from './BookList';

export default function Book() {
	const {books, genres, selectedGenre, dispatch} = useContext(BookContext);

	function handleSelectGenre(ev): void {
		dispatch({
			type: BookTypes.SELECTING_GENRE,
			payload: ev.target.value,
		});
	}

	return (
		<>
			<Header>({books.length}) Libros Disponibles</Header>
			<div className={styles.wrapper}>
				<div className={styles.menu}>
					<Select
						options={genres}
						onChange={handleSelectGenre}
						value={selectedGenre}
					/>
				</div>
				<div className={styles.grid}>
					<BookList />
					<Favorite />
				</div>
				<BookDialog />
			</div>
		</>
	);
}
