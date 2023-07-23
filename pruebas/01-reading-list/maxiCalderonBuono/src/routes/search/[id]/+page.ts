import { error } from '@sveltejs/kit';
import type { Library } from '../../../types';
import libraryData from '../../../lib/data/books.json';
const { library }: Library = libraryData;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const bookFound = library.find(({ book }) => book.title.toLowerCase() === params.id);

	if (bookFound) {
		const { book } = bookFound;

		return book;
	}

	throw error(404, 'Not found');
}
