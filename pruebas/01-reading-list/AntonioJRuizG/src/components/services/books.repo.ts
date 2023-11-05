import bookslist from '../../../../books.json';
import { BookProps } from '../model/book';

type BookResponseBody = {
	library: any;
};

export class BooksRepo {
	getBooks(): BookProps[] {
		const data: BookResponseBody = bookslist;
		const books = data.library.map((book: any) => book.book);
		const mappedBooks: BookProps[] = books.map((book: any) => ({
			isbn: book.ISBN,
			title: book.title,
			pages: book.pages,
			genre: book.genre,
			cover: book.cover,
			synopsis: book.synopsis,
			year: book.year,
			author: (book.author = {
				name: book.author.name,
				otherBooks: book.author.otherBooks,
			}),
		}));
		return mappedBooks;
	}
}
