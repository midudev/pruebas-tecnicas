import booksData from './books.json';
import type { Book } from '../../types';

const api = {
	books: {
		list: (): Promise<Book[]> => Promise.resolve(booksData.library.map((item) => item.book))
	}
};

export default api;
