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
import { FilterProps, updateFilter } from '../../store/filter/slice';

const NO_BOOKS: number = 0;

export default function useBooks(repo: BooksRepo) {
	const books = useAppSelector((state) => state.books);
	const dispatch = useAppDispatch();

	const filters = useAppSelector((state) => state.filters);

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

	const changeFilter = (filter: string) => {
		const booksToFilter: FilterProps = {
			genre: filter,
		};
		dispatch(updateFilter(booksToFilter));
	};

	const booksCount = {
		avaibleBooks:
			books.filter((book) => book.isSelected === false)!.length || NO_BOOKS,
		selectedBooks:
			books.filter((book) => book.isSelected === true)!.length || NO_BOOKS,
	};

	const filterBooks = (books: BookProps[]) => {
		return books?.filter((book) => book.book.genre === filters.genre);
	};

	const getBooksToList = () => {
		const booksToList = filters.genre === 'all' ? books : filterBooks(books);
		return booksToList;
	};

	return {
		books,
		filteredBooks: getBooksToList(),
		deleteBook,
		loadBooks,
		selectBook,
		booksCount,
		changeFilter,
	};
}
