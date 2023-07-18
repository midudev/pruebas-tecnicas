import { BookProps } from '../model/book';
import { BooksRepo } from '../services/books.repo';
import { useAppDispatch, useAppSelector } from './useStore';
import {
	BookId,
	deleteBookByISBN,
	loadNewBooks,
	updateBook,
} from '../../store/books/slice';
import { useEffect } from 'react';

export default function useBooks(repo: BooksRepo) {
	const books = useAppSelector((state) => state.books);
	const dispatch = useAppDispatch();

	useEffect(() => {
		loadBooks();
	}, []);

	const loadBooks = async () => {
		const books: BookProps[] = await repo.getBooks();
		dispatch(loadNewBooks(books));
	};

	const selectBook = (book: BookProps) => {
		dispatch(updateBook(book));
	};

	const deleteBook = (id: BookId) => {
		dispatch(deleteBookByISBN(id));
	};

	const avaibleBooks =
		books.filter((book) => book.isSelected === false)!.length.toString() || '0';

	return { books, deleteBook, loadBooks, selectBook, avaibleBooks };
}
