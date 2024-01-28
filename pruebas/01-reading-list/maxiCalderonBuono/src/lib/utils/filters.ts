import type { LibraryElement } from '../../types';

export const getRangeOfPages = (books: LibraryElement[]) => {
	const draft = books.map(({ book }) => book.pages);

	const maxPage = Math.max(...draft);
	const minPage = Math.min(...draft);
	return { maxPage, minPage };
};

export const getUniqueGenres = (initialValue: string, books: LibraryElement[]) => {
	const buffer: Set<string> = new Set([initialValue]);
	for (const { book } of books) {
		buffer.add(book.genre);
	}

	return Array.from(buffer);
};
