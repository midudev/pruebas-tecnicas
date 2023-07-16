import bookslist from '../../../../books.json';

export default function useBooks() {
	const booksList = bookslist.library;
	const mappedBooks = booksList.map((book) => book.book);

	return { books: mappedBooks };
}
