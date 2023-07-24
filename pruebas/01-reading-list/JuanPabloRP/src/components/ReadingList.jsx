import PropTypes from 'prop-types';
import BookItem from './BookItem';

const ReadingList = ({
	booksReadingList,
	deletingBookToReadingList,
	genreSelected,
	pagesSelected,
}) => {
	return (
		<section className="bg-gray-900 p-4">
			<h3>Lista de lectura</h3>
			<ul>
				{booksReadingList.length !== 0 ? (
					booksReadingList
						.filter(({ pages }) => pages <= pagesSelected)
						.filter(({ genre }) =>
							genreSelected === 'Todos'
								? genre === genre
								: genre === genreSelected
						)
						.map((book) => (
							<BookItem
								key={book.ISBN}
								book={book}
								deletingBookToReadingList={deletingBookToReadingList}
							/>
						))
				) : (
					<p>No hay libros en la lista de lectura</p>
				)}
			</ul>
		</section>
	);
};

ReadingList.propTypes = {
	booksReadingList: PropTypes.array.isRequired,
	deletingBookToReadingList: PropTypes.func.isRequired,
	genreSelected: PropTypes.string.isRequired,
	pagesSelected: PropTypes.any.isRequired,
};

export default ReadingList;
