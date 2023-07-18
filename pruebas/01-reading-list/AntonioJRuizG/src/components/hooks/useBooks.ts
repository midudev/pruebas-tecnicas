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

const NO_BOOKS: number = 0;

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

	const booksCount = {
		avaibleBooks:
			books.filter((book) => book.isSelected === false)!.length || NO_BOOKS,
		selectedBooks:
			books.filter((book) => book.isSelected === true)!.length || NO_BOOKS,
	};

	return { books, deleteBook, loadBooks, selectBook, booksCount };
}
