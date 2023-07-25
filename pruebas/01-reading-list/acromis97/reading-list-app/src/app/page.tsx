import { Navbar } from "./components/Navbar";
import { BookCard } from "./components/BookCard";
import libraryMock from "../../../../books.json";

import { Book } from "./types/Book";
import { StoreList } from "./components/StoreList";
import { ReadingListProvider } from "./context/readingList";
import { useStoreList } from "./hooks/useStoreList";
import { GenreFilter } from "./components/GenreFilter";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-1">
			<div className="flex flex-row justify-between w-full px-12 py-2">
				<h1 className="text-3xl place-self-start font-bold my-3">
					Nuestros libros
				</h1>
				<GenreFilter />
			</div>
			<StoreList />
		</main>
	);
}
