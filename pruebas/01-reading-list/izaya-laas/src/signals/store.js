import { signal, computed, effect } from '@preact/signals';
import { books } from '../database/books';

//Busco el array de ISBNs en el storage
const storageBooksData = JSON.parse(localStorage.getItem('readingList'));

//Global signals
const currentPath = signal(location.pathname);
const allBooks = signal(books);
const myReadingListISBN = signal(storageBooksData || []);

//Computed signals
const myReadingListBooks = computed(() => {
	return allBooks.value.filter((book) =>
		myReadingListISBN.value.includes(book.ISBN)
	);
});
const myReadingListLength = computed(() => myReadingListISBN.value.length);
const totalFreeBooks = computed(() => books.length - myReadingListLength.value);

//Actualizamos el localStorage cada vez que se agrege un ISBN
effect(() => {
	localStorage.setItem('readingList', JSON.stringify(myReadingListISBN));
});

export {
	myReadingListISBN,
	myReadingListBooks,
	myReadingListLength,
	totalFreeBooks,
	allBooks,
	currentPath,
};
