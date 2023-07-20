import type { Book } from '../../types';

export function filterByPages(item: Book, value: string) {
	switch (value) {
		case '1':
			return item.pages < 100;
		case '2':
			return item.pages >= 100 && item.pages < 300;
		case '3':
			return item.pages >= 300 && item.pages < 500;
		case '4':
			return item.pages >= 500;
		default:
			return item;
	}
}

export function filterByCategory(item: Book, selectedGenre: string) {
	if (selectedGenre === 'All') {
		return item;
	} else {
		return item.genre === selectedGenre;
	}
}
