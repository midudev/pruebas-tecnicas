import type { Library } from '~/lib/types';

export function filterByGenre(books: Library, genre: string) {
	if (!genre) return structuredClone(books);

	return books.filter((book) => book.book.genre === genre);
}
