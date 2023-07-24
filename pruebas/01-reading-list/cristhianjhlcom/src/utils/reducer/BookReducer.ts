import {BookTypes} from '../../enums';
import {BookElement} from '../../interfaces';
import {type BookAction, type InitialBookState} from '../../types';

export function getInitialBookState(
	library: Array<BookElement>,
): InitialBookState {
	return {
		books: library,
		favorites: [],
		filteredBooks: [],
		selectedGenre: 'All',
		bookPreview: null,
		genres: new Set<string>(),
		loading: false,
		error: null,
	};
}

export function bookReducer(
	state: InitialBookState,
	action: BookAction,
): InitialBookState {
	switch (action.type) {
		case BookTypes.LOAD_BOOKS:
			return {...state};
		case BookTypes.SELECT_BOOK:
			return {
				...state,
				bookPreview: action.payload,
			};
		case BookTypes.ADD_TO_FAVORITE:
			return {
				...state,
				books: state.books.filter((book) => {
					return book.book.ISBN !== action.payload.ISBN;
				}),
				favorites: state.favorites.concat(action.payload),
			};
		case BookTypes.LOAD_GENRES:
			return {
				...state,
				genres: action.payload,
			};
		case BookTypes.SELECTING_GENRE:
			return {
				...state,
				selectedGenre: action.payload,
				filteredBooks: state.books.filter((book) => {
					if (action.payload === 'All') return book;
					return book.book.genre === action.payload;
				}),
			};
		case BookTypes.REMOVE_FROM_FAVORITES:
			return {
				...state,
				books: state.books.concat(action.payload),
				favorites: state.favorites.filter((book) => {
					return book.ISBN !== action.payload.book.ISBN;
				}),
			};
		default:
			throw new Error('Error: Invalid type');
	}
}
