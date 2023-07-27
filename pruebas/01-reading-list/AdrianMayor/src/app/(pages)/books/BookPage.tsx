"use client";

import LoadingComponent from "@/components/LoadingComponent/LoadingComponent";
import useBooksInit from "@/hooks/useBooksInit";
import useGetWidth from "@/hooks/useGetWidth";
import BooksPageLayout from "@/layouts/BooksPageLayout/BooksPageLayout";
import { Book } from "@/models/book.model";

interface BookPageProps {
	initialBooks: Book[];
}

const BookPage = ({ initialBooks }: BookPageProps) => {
	const { booksToDisplay, setFilteredBooks, genres, reduxListState, isLoading, setIsLoading } = useBooksInit({
		initialBooks,
	});
	const { width } = useGetWidth();

	return typeof width === "number" ? (
		<BooksPageLayout
			booksToDisplay={booksToDisplay}
			setFilteredBooks={setFilteredBooks}
			genres={genres}
			reduxListState={reduxListState}
			isLoading={isLoading}
			setIsLoading={setIsLoading}
		></BooksPageLayout>
	) : (
		<LoadingComponent />
	);
};

export default BookPage;
