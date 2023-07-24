//import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({
	booksAvailable,
	genreSelected,
	pagesSelected,
	addingBookToReadingList,
}) => {
	return (
		<section className="p-4 bg-slate-700">
			<h3>Disponibles</h3>
			<ul className="flex flex-wrap jusitfy-center items-center w-auto ">
				{booksAvailable.length !== 0 ? (
					booksAvailable
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
								addingBookToReadingList={addingBookToReadingList}
							/>
						))
				) : (
					<p>No hay libros disponibles</p>
				)}
			</ul>
		</section>
	);
};

BookList.propTypes = {
	booksAvailable: PropTypes.array.isRequired,
	genreSelected: PropTypes.string.isRequired,
	pagesSelected: PropTypes.any.isRequired,
	addingBookToReadingList: PropTypes.func.isRequired,
};

export default BookList;
/*
{
	ISBN,
	author,
	cover,
	genre,
	pages,
	synopsis,
	title,
	year,
} */

/*

{library ? (
	genreSelected === 'Todos' ? (
		library.map(({ book }) => <Book key={book.ISBN} book={book} />)
	) : (
		library
			.filter(({ book }) => book.genre === genreSelected)
			.map(({ book }) => <Book key={book.ISBN} book={book} />)
	)
) : (
	<p>No hay libros disponibles</p>
)}
*/
