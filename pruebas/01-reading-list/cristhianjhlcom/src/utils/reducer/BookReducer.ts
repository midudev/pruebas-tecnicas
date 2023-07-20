import { BookTypes } from "../../enums";
import { BookElement } from "../../interfaces/Book";
import { type BookAction, type InitialBookState } from "../../types";

export function getInitialBookState(
	library: Array<BookElement>
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
	action: BookAction
): InitialBookState {
	console.log({ state, action });
	switch (action.type) {
		case BookTypes.LOAD_BOOKS:
			return { ...state };
		case BookTypes.SELECT_BOOK:
			return {
				...state,
				bookPreview: action.payload,
			};
		default:
			throw new Error("Error: Invalid type");
	}
}
