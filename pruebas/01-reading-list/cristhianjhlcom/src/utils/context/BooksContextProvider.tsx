import { createContext, useState } from "react";
import { library } from "../../data/library.json";
import { Library } from "../../interfaces/Library";

interface State {
	data: Library;
	loading: boolean;
	error: null | string;
}

export interface BooksContext {
	state: State;
}

export const BooksContext = createContext<BooksContextType | null>(null);

export default function BooksContextProvider({ children }) {
	const [state] = useState<State>({
		data: library as Library,
		loading: false,
		error: null,
	});

	return (
		<BooksContext.Provider
			value={{
				libraryState: state,
			}}
		>
			{children}
		</BooksContext.Provider>
	);
}
