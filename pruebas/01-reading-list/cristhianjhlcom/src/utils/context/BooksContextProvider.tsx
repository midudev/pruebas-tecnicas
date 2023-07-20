import { createContext, useReducer, useRef } from "react";
import { library } from "../../data/library.json";
import { InitialBookState } from "../../types";
import { booksReducer, getInitialBookState } from "../reducer/BookReducer";

export type BooksContext = {
	state: InitialBookState;
};

export const BooksContext = createContext<BooksContext | null>(null);

export default function BooksContextProvider({ children }) {
	const modalRef = useRef();
	const [state, dispatch] = useReducer(
		booksReducer,
		library,
		getInitialBookState
	);

	return (
		<BooksContext.Provider
			value={{
				books: state.books,
				bookPreview: state.bookPreview,
				dispatch,
				modalRef,
			}}
		>
			{children}
		</BooksContext.Provider>
	);
}
