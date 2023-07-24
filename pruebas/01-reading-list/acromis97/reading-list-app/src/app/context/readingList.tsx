"use client";

import { createContext, useState } from "react";
import { Book } from "../types/Book";

interface ReadingListType {
	readingList: Book[];
	addToReadingList: (newBook: Book) => void;
	removeFromReadingList: (book: Book) => void;
}

export const ReadingListContext = createContext<ReadingListType>({
	readingList: [],
	addToReadingList: () => {},
	removeFromReadingList: () => {},
});

export function ReadingListProvider({ children }) {
	const [readingList, setReadingList] = useState<Book[]>([]);

	const addToReadingList = (newBook: Book) => {
		console.log("Added to reading list");

		// Busco si el libro ya esta en la lista
		const bookIndex = readingList.findIndex(
			(book: Book) => book.ISBN === newBook.ISBN
		);
		console.log("🚀 ~ bookIndex:", bookIndex);

		// Si no existe el libro
		if (bookIndex == -1) {
			console.log("Añadido");

			newBook.inReadingList = true;

			setReadingList((prevState) => [...prevState, newBook]);
		}
	};

	const removeFromReadingList = (bookToDelete: Book) => {
		console.log(`Removed ${bookToDelete.title}`);

		const bookIndex = readingList.findIndex(
			(book: Book) => book.ISBN === bookToDelete.ISBN
		);

		// Si el libro existe
		if (bookIndex != -1) {
            bookToDelete.inReadingList = false;
            
            const updatedBookList = readingList.filter((book) => book.ISBN !== bookToDelete.ISBN);
            setReadingList(updatedBookList);
		}
	};

	return (
		<ReadingListContext.Provider
			value={{
				readingList,
				addToReadingList,
				removeFromReadingList,
			}}>
			{children}
		</ReadingListContext.Provider>
	);
}
