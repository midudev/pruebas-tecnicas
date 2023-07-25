'use client'

import { createContext, useState } from "react";

interface GenreFilterType{
    genreFilter:string;
    changeFilter:(filter: string) => void;
}

export const GenreFilterContext = createContext<GenreFilterType>({
    genreFilter: "Todos",
    changeFilter: () => {}
});

type GenreFilterProps = {
	children?: React.ReactNode;
};

export function GenreFilterProvider({ children }: GenreFilterProps) {
	const [genreFilter, setGenreFilter] = useState<string>("Todos");

	const changeFilter = (filter: string) => {
				setGenreFilter(filter);
	};

	return (
		<GenreFilterContext.Provider
			value={{ genreFilter, changeFilter }}>
			{children}
		</GenreFilterContext.Provider>
	);
}
