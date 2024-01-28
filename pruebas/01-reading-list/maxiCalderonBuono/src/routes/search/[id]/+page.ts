import api from '$lib/services/api.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return api.books
		.list()
		.then((data) => data.find((book) => book.title.toLowerCase() === params.id))
		.then((result) => {
			if (result) return result;

			throw error(404, 'Not found');
		});
}
