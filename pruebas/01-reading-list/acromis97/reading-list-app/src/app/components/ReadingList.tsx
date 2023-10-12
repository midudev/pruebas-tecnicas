'use client'

import { useReadingList } from "../hooks/useReadingList";
import { useStoreList } from "../hooks/useStoreList";
import { Book } from "../types/Book";
import { BookCard } from "./BookCard";

export function ReadingList() {
    // const {readingList } = useReadingList()
	const { storeList } = useStoreList()

	return (
		<div className="grid lg:gap-16 md:gap-6 sm:gap-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-rows-3 lg:p-5">
{/* 			{readingList.map((book : Book) => {
				return <BookCard key={book.ISBN} book={book} />;
			})} */}
			{storeList.map((book : Book) => {
				if(book.inReadingList) return <BookCard key={book.ISBN} book={book} />;
			})}
		</div>
	);
}
