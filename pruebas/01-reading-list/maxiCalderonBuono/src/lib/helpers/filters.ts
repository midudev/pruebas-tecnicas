import { NO_FILTER_APPLIED } from '$lib/const/filters';
import type { Book } from '../../types';

export function filterByPages(item: Book, value: number) {
	return item.pages <= value;
}

export function filterByCategory(item: Book, selectedGenre: string) {
	return selectedGenre === NO_FILTER_APPLIED ? item : item.genre === selectedGenre;
}
