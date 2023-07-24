import { Navbar } from "./components/Navbar";
import { BookCard } from "./components/BookCard";
import libraryMock from "../../../../books.json";

import { Book } from "./types/Book";
import { StoreList } from "./components/StoreList";
import { ReadingListProvider } from "./context/readingList";
import { useStoreList } from "./hooks/useStoreList";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-1">
			<h1 className="text-3xl place-self-start font-bold my-3 mx-6">
				Nuestros libros
			</h1>
			<StoreList />
		</main>
	);
}
