import {useEffect} from 'react';
import {Search} from '../../components/Search';
import {Select} from '../../components/Select';
import {useBook, useFilters} from '../../utils/hooks';
import {Favorite} from '../Favorite';
import styles from './Book.module.css';
import BookDialog from './BookDialog';
import BookList from './BookList';

export default function Book() {
	const {books, handleLoadInitialBooksAndFavorites, handleStorageUpdate} =
		useBook();
	const {genres, filters, handleSelectGenre, handleSearch} = useFilters();

	useEffect(() => {
		handleLoadInitialBooksAndFavorites();
	}, []);

	useEffect(() => {
		window.addEventListener('storage', handleStorageUpdate);

		return () => {
			window.removeEventListener('storage', handleStorageUpdate);
		};
	}, []);

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.menu}>
					<Select
						options={genres}
						onChange={handleSelectGenre}
						value={filters.genre}
					/>
					<Search value={filters.search} onChange={handleSearch} />
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
