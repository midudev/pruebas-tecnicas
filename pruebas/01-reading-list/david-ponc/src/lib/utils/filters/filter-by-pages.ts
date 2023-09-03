import type { Library } from '~/lib/types';

export function filterByPages(books: Library, pages: number) {
	if (!pages) return structuredClone(books);

	return books.filter((book) => {
		return book.book.pages <= pages;
	});
}
