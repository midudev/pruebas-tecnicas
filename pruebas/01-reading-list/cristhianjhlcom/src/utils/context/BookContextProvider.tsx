import { createContext, useReducer, useRef } from "react";
import { library } from "../../data/library.json";
import { InitialBookState } from "../../types";
import { bookReducer, getInitialBookState } from "../reducer/BookReducer";

export type BookContextType = {
	state: InitialBookState;
};

export const BookContext = createContext<BookContextType>();

export function BookContextProvider({ children }) {
	const modalRef = useRef();
	const [state, dispatch] = useReducer(
		bookReducer,
		library,
		getInitialBookState,
	);

	return (
		<BookContext.Provider
			value={{
				books: state.books,
				bookPreview: state.bookPreview,
				favorites: state.favorites,
				dispatch,
				modalRef,
			}}
		>
			{children}
		</BookContext.Provider>
	);
}
