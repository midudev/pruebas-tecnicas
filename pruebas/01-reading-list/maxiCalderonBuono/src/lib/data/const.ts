import type { LibraryElement } from '../../types';

export const PAGE_RANGE = [
	{ label: 'Ningún filtro', value: '0' },
	{ label: 'Menos de 100 páginas', value: '1' },
	{ label: 'Entre 100 y 300 páginas', value: '2' },
	{ label: 'Entre 300 y 500 páginas', value: '3' },
	{ label: 'Más de 500 páginas', value: '4' }
];

export const getUniqueGenres = (initialValue: string, books: LibraryElement[]) => {
	const buffer: Set<string> = new Set([initialValue]);
	for (const { book } of books) {
		buffer.add(book.genre);
	}

	const uniqueGenres = Array.from(buffer);
	return uniqueGenres.map((genre) => ({ label: genre, value: genre }));
};
