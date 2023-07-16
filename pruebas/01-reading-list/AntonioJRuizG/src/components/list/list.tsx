import bookslist from '../../../../books.json';

export default function List() {
	const booksList = bookslist.library;
	const mappedBooks = booksList.map((book) => book.book);

	return (
		<>
			<h2>Avaible Books</h2>
			<ul>
				{mappedBooks.map((book) => (
					<li key={book.ISBN}>
						<img
							src={book.cover}
							alt={'Cover of the book ' + book.title + ' by ' + book.author}
						></img>
					</li>
				))}
			</ul>
		</>
	);
}
