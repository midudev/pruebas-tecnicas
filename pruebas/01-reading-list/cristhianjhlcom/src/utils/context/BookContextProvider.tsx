import {createContext, useEffect, useReducer, useRef} from 'react';
import {library} from '../../data/library.json';
import {BookTypes} from '../../enums';
import {InitialBookState} from '../../types';
import {bookReducer, getInitialBookState} from '../reducer/BookReducer';

export type BookContextType = {
	state: InitialBookState;
};

export const BookContext = createContext<BookContextType>();

export function BookContextProvider({children}) {
	const modalRef = useRef();
	const [state, dispatch] = useReducer(
		bookReducer,
		library,
		getInitialBookState,
	);

	function loadAllGenres() {
		const genres = state.books.forEach((book) => {
			dispatch({
				type: BookTypes.LOAD_GENRES,
				payload: state.genres.add(book.book.genre),
			});
		});
		dispatch({
			type: BookTypes.LOAD_GENRES,
			payload: state.genres.add('All'),
		});
	}

	useEffect(() => {
		loadAllGenres();
	}, []);

	return (
		<BookContext.Provider
			value={{
				books: state.books,
				bookPreview: state.bookPreview,
				filteredBooks: state.filteredBooks,
				selectedGenre: state.selectedGenre,
				favorites: state.favorites,
				genres: state.genres,
				dispatch,
				modalRef,
			}}
		>
			{children}
		</BookContext.Provider>
	);
}
