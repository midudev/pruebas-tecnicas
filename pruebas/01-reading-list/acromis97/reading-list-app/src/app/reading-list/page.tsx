"use client";

import { BookList } from "../components/BookList";
import { useReadingList } from "../hooks/useReadingList";
import { Book } from "../types/Book";

export default function Page() {
	const { readingList } = useReadingList();

	return (
		<div className="flex min-h-screen flex-col items-center justify-between p-1">
			<h1 className="text-3xl place-self-start font-bold my-3 mx-6">
				Lista de lectura
			</h1>
			<div className="w-3/4">
				{readingList.length == 0 ? (
					<h2>No tienes libros en tu lista</h2>
				) : (
					<BookList books={readingList} />
				)}
			</div>
		</div>
	);
}
