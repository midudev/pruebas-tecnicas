"use client";

import { useStoreList } from "../hooks/useStoreList";
import { Book } from "../types/Book";
import { BookCard } from "./BookCard";
import { useGenreFilter } from "../hooks/useGenreFilter";
import { GenreFilter } from "./GenreFilter";

export function StoreList() {
	const { storeList } = useStoreList();
	const { genreFilter } = useGenreFilter();


	function filterBooks() {
		return storeList.filter((book) => {
			if (genreFilter === "Todos") {
				return true;
			} else {
				return book.genre === genreFilter;
			}
		});
	}

	return (
		<>
			<div className="grid place-items-baseline lg:gap-12 md:gap-6 sm:gap-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-rows-3 lg:p-5">
				{filterBooks().map((book: Book) => {
					return <BookCard key={book.ISBN} book={book} />;
				})}
			</div>
		</>
	);
}
