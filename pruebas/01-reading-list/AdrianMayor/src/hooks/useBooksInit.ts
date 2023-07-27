"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import useManageRedux from "@/hooks/useManageRedux";
import { Book } from "@/models/book.model";
import { genresAvailable } from "@/models/genresAvailable";
import setUnavailableBooks from "@/utils/setUnavailableBooks";
import sortBooks from "@/utils/sortBooks";
import trimGenres from "@/utils/trimGenres";
import { useEffect, useState } from "react";

export interface useBooksInitProps {
	initialBooks: Book[];
}

const useBooksInit = ({ initialBooks }: useBooksInitProps) => {
	const [booksToDisplay, setBooksToDisplay] = useState<Book[]>([]);
	const { setGenresAvailableReduxState, reduxListState, setListReduxState } = useManageRedux();
	const [genres, setGenres] = useState<genresAvailable[]>([]);
	const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
	const [localStorageLoaded, setLocalStorageLoaded] = useState(false);
	const [localStorageValue] = useLocalStorage<Book[]>("readingList");
	const [isLoading, setIsLoading] = useState(true);
	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		if (initialized) {
			if ((!localStorageLoaded && localStorageValue) || initialized) {
				localStorageValue && setListReduxState(localStorageValue);
				setLocalStorageLoaded(true);
				setInitialized(false);
			}
		}
		localStorageValue === null && setInitialized(true);
	}, [localStorageValue, initialized]);

	useEffect(() => {
		setIsLoading(true);
		const updatedBooks = setUnavailableBooks({ booksToDisplay: initialBooks, reduxListState });
		const sortedBooks = sortBooks({ updatedBooks });
		const availableGenres = trimGenres({ updatedBooks });

		setGenres(availableGenres);
		setBooksToDisplay(sortedBooks);
		setGenresAvailableReduxState(availableGenres);

		setIsLoading(false);
	}, [localStorageLoaded, localStorageValue]);

	useEffect(() => {
		if (filteredBooks.length >= 0) {
			const updatedBooks = setUnavailableBooks({ booksToDisplay: filteredBooks, reduxListState });

			const sortedBooks = sortBooks({ updatedBooks });

			console.log(filteredBooks);
			setBooksToDisplay(sortedBooks);
		}
		setIsLoading(false);
	}, [filteredBooks]);

	return {
		booksToDisplay,
		setBooksToDisplay,
		genres,
		reduxListState,
		setFilteredBooks,
		isLoading,
		setIsLoading,
	};
};

export default useBooksInit;
