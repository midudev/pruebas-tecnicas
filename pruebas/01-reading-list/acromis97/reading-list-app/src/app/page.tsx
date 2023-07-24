import { Navbar } from "./components/Navbar";
import { BookCard } from "./components/BookCard";
import libraryMock from "../../../../books.json";

import { Book } from "./types/Book";
import { BookList } from "./components/BookList";
import { ReadingListProvider } from "./context/readingList";

export default function Home() {
	// Obtengo lista de libros desde el mock
	let books: Book[] = libraryMock.library.map((book) => {
		return {...book.book,inReadingList: false}
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-1">
			<h1 className="text-3xl place-self-start font-bold my-3 mx-6">
				Nuestros libros
			</h1>
			<BookList books={books} />
		</main>
	);
}
