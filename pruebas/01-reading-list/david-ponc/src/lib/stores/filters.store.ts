import { writable } from 'svelte/store';
import { obtainParam } from '~/lib/utils';

export const genre = writable<string>(obtainParam('genre'));
export const title = writable<string>(obtainParam('title'));
export const pages = writable({
	current: Number(obtainParam('pages')) || 0,
	min: 0,
	max: 0
});

genre.subscribe((value) => {
	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);

	if (value) {
		params.set('genre', value);
	} else {
		genre.set('');
		params.delete('genre');
	}

	const newUrl = `${url.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
	window.history.replaceState({}, '', `${newUrl}`);
});

title.subscribe((value) => {
	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);

	if (value) {
		params.set('title', value);
	} else {
		title.set('');
		params.delete('title');
	}

	const newUrl = `${url.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
	window.history.replaceState({}, '', `${newUrl}`);
});

pages.subscribe((value) => {
	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);

	if (value.current < value.max) {
		params.set('pages', value.current.toString());
	} else {
		params.delete('pages');
	}

	const newUrl = `${url.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
	window.history.replaceState({}, '', `${newUrl}`);
});
