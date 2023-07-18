import { useState, useEffect, SyntheticEvent, useMemo } from 'react';

import styles from './books.filter.module.scss';
import useBooks from '../hooks/useBooks';
import { BooksRepo } from '../services/books.repo';

export default function BooksFilter() {
	const [filter, setFilter] = useState('');

	const repo = useMemo(() => new BooksRepo(), []);
	const { filterListByGenre } = useBooks(repo);

	const genreList = {
		genre: [
			{ spanish: 'Fantasía', english: 'Fantasy' },
			{ spanish: 'Ciencia ficción', english: 'Science Fiction' },
			{ spanish: 'Zombies', english: 'Zombies' },
			{ spanish: 'Terror', english: 'Horror' },
		],
	};

	const handleChange = (ev: SyntheticEvent) => {
		const element = ev.target as HTMLFormElement;
		setFilter(element.value);
	};

	useEffect(() => {
		filterListByGenre(filter);
	}, [filter]);

	return (
		<>
			<h2>Filter by genre</h2>
			<select
				className={styles.formSelector}
				name='genre'
				id='genre'
				onChange={handleChange}
				defaultValue={filter}
				placeholder=''
				required
			>
				<option value='all'>All</option>
				{genreList.genre.map((genre) => (
					<option key={genre.english} value={genre.spanish}>
						{genre.english}
					</option>
				))}
			</select>
		</>
	);
}
