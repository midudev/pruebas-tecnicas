import {createContext, useReducer, useRef} from 'react';
import {InitialBookState} from '../../types';
import {BOOKS_INITIAL_STATE, bookReducer} from '../reducer/BookReducer';

export type BookContextType = {
	state: InitialBookState;
};

type Props = {
	children: JSX.Element | JSX.Element[];
};

export const BookContext = createContext<BookContextType>();

export function BookContextProvider({children}: Props) {
	const [state, dispatch] = useReducer(bookReducer, BOOKS_INITIAL_STATE);
	const booksDialogRef = useRef(null);

	return (
		<BookContext.Provider
			value={{
				...state,
				booksDialogRef,
				dispatch,
			}}
		>
			{children}
		</BookContext.Provider>
	);
}
