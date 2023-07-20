import { library as booksJson } from './books.json';

export const books = booksJson.map(({ book: bookData }) => bookData);

//Generos sacados a mano del JSON
export const genres = [
	{ name: 'Any', value: 'any' },
	{ name: 'Fantasía', value: 'fantasia' },
	{ name: 'Ciencia ficción', value: 'ciencia ficcion' },
	{ name: 'Terror', value: 'terror' },
	{ name: 'Zombies', value: 'zombies' },
];
