import api from '$lib/services/api.js';
import { error } from '@sveltejs/kit';
import type { Book } from '../../../types.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	let bookFound: Book | undefined;

	api.books
		.list()
		.then((data) => data.find((book) => book.title.toLowerCase() === params.id))
		.then((result) => (bookFound = result));

	if (bookFound) return bookFound;

	throw error(404, 'Not found');
}
