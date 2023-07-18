import { signal, computed, effect } from '@preact/signals';
import { library as booksJson } from '../database/books.json';

const books = booksJson.map(({ book: bookData }) => bookData);

const storageBooksData = localStorage.getItem('readingList');

const allBooks = signal(books);
const myReadingListISBN = signal(storageBooksData || []);

const myReadingListBooks = computed(() => {
	return allBooks.value.filter((book) =>
		myReadingListISBN.value.includes(book.ISBN)
	);
});

const myReadingListLength = computed(() => myReadingListISBN.value.length);

effect(() => {
	console.log(myReadingListISBN.value);
	console.log(myReadingListBooks.value);
	console.log(JSON.stringify(myReadingListISBN.value));
});

export { myReadingListISBN, myReadingListLength, allBooks, myReadingListBooks };
