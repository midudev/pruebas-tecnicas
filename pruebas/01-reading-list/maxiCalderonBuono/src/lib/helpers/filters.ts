import type { Book } from '../../types';

export function filterByPages(item: Book, value: number) {
	return item.pages <= value;
}

export function filterByCategory(item: Book, selectedGenre: string) {
	if (selectedGenre === 'All') {
		return item;
	} else {
		return item.genre === selectedGenre;
	}
}
