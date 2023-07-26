import {BookTypes} from '../../enums';
import {type BookAction, type InitialBookState} from '../../types';

export const BOOKS_INITIAL_STATE = {
	books: [],
	favorites: [],
	filters: {
		genre: 'All',
		search: '',
	},
	bookPreview: {},
	genres: ['All', 'Fantasía', 'Ciencia ficción', 'Zombies', 'Terror'],
	loading: false,
	error: null,
};

export function bookReducer(
	state: InitialBookState,
	action: BookAction,
): InitialBookState {
	switch (action.type) {
		case BookTypes.RELOAD:
			return {
				...state,
				books: action.payload.library,
				favorites: action.payload.favorites,
			};
		case BookTypes.LOAD_BOOKS:
			return {
				...state,
				books: action.payload.books,
				favorites: action.payload.favorites,
			};
		case BookTypes.SELECT_BOOK:
			return {
				...state,
				bookPreview: action.payload,
			};
		case BookTypes.ADD_TO_FAVORITE:
			return {
				...state,
				books: action.payload.library,
				favorites: action.payload.favorites,
			};
		case BookTypes.LOAD_GENRES:
			return {
				...state,
				genres: action.payload,
			};
		case BookTypes.SELECTING_GENRE:
			return {
				...state,
				filters: {
					...state.filters,
					genre: action.payload,
				},
			};
		case BookTypes.SEARCH:
			return {
				...state,
				filters: {
					...state.filters,
					search: action.payload,
				},
			};
		case BookTypes.REMOVE_FROM_FAVORITES:
			return {
				...state,
				books: action.payload.books,
				favorites: action.payload.favorites,
			};
		default:
			throw new Error('Error: Invalid type');
	}
}
