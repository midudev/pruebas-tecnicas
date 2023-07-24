import { useState } from 'react';
import books from '../../../books.json';
import Range from '../components/Range';
import Dropdown from '../components/Dropdown';
import BookList from '../components/BookList';
import ReadingList from '../components/ReadingList';

const Home = () => {
	const { library } = books;
	const [genreSelected, setGenreSelected] = useState('Todos');

	//para que sea mejor la ux por tener "todos" arriba del dropdown
	const genres = [...new Set(library.map(({ book }) => book.genre))];
	genres.unshift('Todos');

	const pagesArray = [...new Set(library.map(({ book }) => book.pages))];
	const minPages = Math.min(...pagesArray);
	const maxPages = Math.max(...pagesArray);

	const [pagesSelected, setPagesSelected] = useState(maxPages);

	const booksArray = [...new Set(library.map(({ book }) => book))];
	const [booksAvailable, setBooksAvailable] = useState(booksArray);

	const [booksReadingList, setBooksReadingList] = useState([]);

	//pasa los libros de disponible a la lista de lectura
	const addingBookToReadingList = (bookISBN) => {
		const bookToAdd = booksAvailable.find((book) => book.ISBN === bookISBN);

		const deleteFromAvailable = booksAvailable.filter(
			(book) => book.ISBN !== bookISBN
		);

		const addingToReadingList = [...booksReadingList, bookToAdd];

		setBooksAvailable(deleteFromAvailable);
		setBooksReadingList(addingToReadingList);

		/* console.log({ booksAvailable });
		console.log({ booksReadingList }); */
	};

	//pasa los libros de la lista de lectura a los disponibles
	const deletingBookToReadingList = (bookISBN) => {
		const bookToAdd = booksReadingList.find((book) => book.ISBN === bookISBN);

		const addingToAvailable = [...booksAvailable, bookToAdd];

		const deletingToReadingList = booksReadingList.filter(
			(book) => book.ISBN !== bookISBN
		);
		setBooksAvailable(addingToAvailable);
		setBooksReadingList(deletingToReadingList);
	};

	return (
		<main className="bg-zinc-800 text-white p-2 h-full ">
			<section className="p-4 font-bold">
				<h1 className="text-4xl">{booksAvailable.length} libros disponibles</h1>
				<h2 className="text-2xl">
					{booksReadingList.length} libros en la lista de lectura
				</h2>
			</section>

			<div className="flex space-x-1 items-start p-4">
				<Range
					minPages={minPages}
					maxPages={maxPages}
					pagesSelected={pagesSelected}
					setPagesSelected={setPagesSelected}
				/>
				<Dropdown
					genres={genres}
					genreSelected={genreSelected}
					setGenreSelected={setGenreSelected}
				/>
			</div>

			<div className="">
				<BookList
					booksAvailable={booksAvailable}
					genreSelected={genreSelected}
					pagesSelected={pagesSelected}
					addingBookToReadingList={addingBookToReadingList}
				/>
				<ReadingList
					genreSelected={genreSelected}
					pagesSelected={pagesSelected}
					booksReadingList={booksReadingList}
					deletingBookToReadingList={deletingBookToReadingList}
				/>
			</div>
		</main>
	);
};

export default Home;
/* 
book
: 
ISBN
: 
"978-0618640157"
author
: 
{name: 'J.R.R. Tolkien', otherBooks: Array(2)}
cover
: 
"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg"
genre
: 
"Fantasía"
pages
: 
1200
synopsis
: 
"Una aventura épica en un mundo de fantasía llamado la Tierra Media."
title
: 
"El Señor de los Anillos"
year
: 
1954
*/

/*
{genres.map ? (
						genres.map((genre) => (
							<li key={genre}>
								<a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
									{genre}
								</a>
							</li>
						))
					) : (
						<p>sss</p>
					)}
*/
