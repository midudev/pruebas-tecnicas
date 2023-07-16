import { BookProps } from '../model/book';
import { BooksRepo } from '../services/books.repo';

export default function useBooks(repo: BooksRepo) {
	const books: BookProps[] = repo.getBooks();
	return { books };
}
