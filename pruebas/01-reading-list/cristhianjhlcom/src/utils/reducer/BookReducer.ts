import { BookTypes } from "../../enums";
import { BookElement } from "../../interfaces/Book";
import { type BookAction, type InitialBookState } from "../../types";

export function getInitialBookState(
	library: Array<BookElement>,
): InitialBookState {
	return {
		books: library,
		favorites: [],
		bookPreview: null,
		categories: [],
		loading: false,
		error: null,
	};
}

export function booksReducer(
	state: InitialBookState,
	action: BookAction,
): InitialBookState {
	switch (action.type) {
		case BookTypes.LOAD_BOOKS:
			return { ...state };
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
		case BookTypes.REMOVE_FROM_FAVORITES: {
			console.log("payload", action.payload);
			console.log("state", state);
			return {
				...state,
				books: state.books.concat(action.payload),
				favorites: state.favorites.filter((book) => {
					return book.ISBN !== action.payload.book.ISBN;
				}),
			};
		}
		default:
			throw new Error("Error: Invalid type");
	}
}
