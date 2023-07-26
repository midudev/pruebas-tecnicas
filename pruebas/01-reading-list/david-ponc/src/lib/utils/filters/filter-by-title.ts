import type { Library } from '~/lib/types';

export function filterByTitle(books: Library, title: string) {
	if (!title) return structuredClone(books);

	const lowerCasedTitle = title.toLowerCase();
	return books.filter((book) => {
		const lowerCasedBookTitle = book.book.title.toLowerCase();
		return (
			lowerCasedBookTitle.includes(lowerCasedTitle) || lowerCasedTitle.includes(lowerCasedBookTitle)
		);
	});
}
