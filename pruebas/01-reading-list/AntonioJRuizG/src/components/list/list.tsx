import useBooks from '../hooks/useBooks';

export default function List() {
	const { books } = useBooks();

	return (
		<>
			<h2>Avaible Books</h2>
			<ul>
				{books.map((book) => (
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
