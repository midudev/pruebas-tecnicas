import { Book } from "@/models/book.model";

interface setUnavailableBooksProps {
	booksToDisplay: Book[];
	reduxListState: Book[];
}

const setUnavailableBooks = ({ booksToDisplay, reduxListState }: setUnavailableBooksProps) => {
	return booksToDisplay.map((bookInList) => ({
		...bookInList,
		availability: !reduxListState.some((item) => item.ISBN === bookInList.ISBN),
	}));
};

export default setUnavailableBooks;
