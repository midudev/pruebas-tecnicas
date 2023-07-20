import { signal, computed, effect } from '@preact/signals';
import { books } from '../database/books';

const storageBooksData = localStorage.getItem('readingList');

const currentPath = signal(location.pathname);

const allBooks = signal(books);

const myReadingListISBN = signal(storageBooksData || []);

//O^n2
const myReadingListBooks = computed(() => {
	return allBooks.value.filter((book) =>
		myReadingListISBN.value.includes(book.ISBN)
	);
});

const myReadingListLength = computed(() => myReadingListISBN.value.length);

effect(() => {
	console.log(JSON.stringify(myReadingListISBN));
});

export {
	myReadingListISBN,
	myReadingListLength,
	allBooks,
	myReadingListBooks,
	currentPath,
};
