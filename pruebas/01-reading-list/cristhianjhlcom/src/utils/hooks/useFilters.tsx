import {useContext} from 'react';
import {BookTypes} from '../../enums';
import {BookContext} from '../context';

export default function useFilters() {
	const {books, genres, filters, dispatch} = useContext(BookContext);

	function handleSelectGenre(ev): void {
		dispatch({
			type: BookTypes.SELECTING_GENRE,
			payload: ev.target.value,
		});
	}

	function handleSearch(ev) {
		dispatch({
			type: BookTypes.SEARCH,
			payload: ev.target.value,
		});
	}

	function handleFilteredBooks() {
		if (filters.genre === 'All' && filters.search === '') return books;
		if (filters.genre !== 'All' && filters.search === '') {
			return books.filter((book) => book.book.genre === filters.genre);
		}

		if (filters.search !== '') {
			return books.filter((book) => {
				return book.book.title
					.toLowerCase()
					.includes(filters.search.toLowerCase());
			});
		}

		return books;
	}

	return {
		genres,
		filters,
		handleSearch,
		handleSelectGenre,
		handleFilteredBooks,
	};
}
