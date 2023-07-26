import { derived, writable } from 'svelte/store';
import type { Library } from '../types';
import { storage } from '../utils/storage';

function createLibraryStore() {
	const availableBooks = writable<Library>([]);
	const readingList = writable<Library>([]);
	const availableBooksCount = derived(availableBooks, ($availableBooks) => $availableBooks.length);
	const readingListCount = derived(readingList, ($readingList) => $readingList.length);

	function addToReadingList(book: Library[number]['book']) {
		readingList.update((prevReadingList) => [...prevReadingList, { book }]);
		availableBooks.update((prevAvailableBooks) =>
			prevAvailableBooks.filter((b) => b.book.ISBN !== book.ISBN)
		);

		readingList.subscribe((list) => {
			storage.persist('readingList', list);
		});

		availableBooks.subscribe((list) => {
			storage.persist('availableBooks', list);
		});
	}

	function removeFromReadingList(book: Library[number]['book']) {
		readingList.update((prevReadingList) =>
			prevReadingList.filter((b) => b.book.ISBN !== book.ISBN)
		);
		availableBooks.update((prevAvailableBooks) => [...prevAvailableBooks, { book }]);

		readingList.subscribe((list) => {
			storage.persist('readingList', list);
		});

		availableBooks.subscribe((list) => {
			storage.persist('availableBooks', list);
		});
	}

	function increasePriority(book: Library[number]['book']) {
		readingList.update((prevReadingList) => {
			const bookIndex = prevReadingList.findIndex((b) => b.book.ISBN === book.ISBN);
			const bookToIncrease = prevReadingList[bookIndex];

			if (bookIndex === -1) {
				return prevReadingList;
			}

			prevReadingList[bookIndex] = prevReadingList[bookIndex - 1];
			prevReadingList[bookIndex - 1] = bookToIncrease;

			return prevReadingList;
		});
	}

	function decreasePriority(book: Library[number]['book']) {
		readingList.update((prevReadingList) => {
			const bookIndex = prevReadingList.findIndex((b) => b.book.ISBN === book.ISBN);
			const bookToDecrease = prevReadingList[bookIndex];

			if (bookIndex === -1) {
				return prevReadingList;
			}

			prevReadingList[bookIndex] = prevReadingList[bookIndex + 1];
			prevReadingList[bookIndex + 1] = bookToDecrease;

			return prevReadingList;
		});
	}

	return {
		availableBooks,
		readingList,
		availableBooksCount,
		readingListCount,
		addToReadingList,
		removeFromReadingList,
		increasePriority,
		decreasePriority
	};
}

export const {
	availableBooks,
	addToReadingList,
	availableBooksCount,
	readingList,
	readingListCount,
	removeFromReadingList,
	increasePriority,
	decreasePriority
} = createLibraryStore();
