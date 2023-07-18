import PropTypes from 'prop-types';
//import { useState } from 'react';

const BookItem = ({
	book,
	addingBookToReadingList,
	deletingBookToReadingList,
}) => {
	const handleAddingToReadingList = () => {
		addingBookToReadingList(book?.ISBN);
	};

	const handleDelectingToReadingList = () => {
		deletingBookToReadingList(book?.ISBN);
	};

	return (
		<button
			className="p-2 cursor-pointer hover:scale-95 hover:opacity-70"
			onClick={
				addingBookToReadingList
					? handleAddingToReadingList
					: handleDelectingToReadingList
			}
		>
			<img
				src={book?.cover}
				alt={`${book?.title} image`}
				width={150}
				height={200}
			/>
		</button>
	);
};

BookItem.propTypes = {
	book: PropTypes.any.isRequired,
	addingBookToReadingList: PropTypes.func,
	deletingBookToReadingList: PropTypes.func,
};

export default BookItem;

/* 
{
	book: { ISBN, author, cover, genre, pages, synopsis, title, year },
}

	ISBN: PropTypes.string.isRequired,
	author: PropTypes.any.isRequired,
	cover: PropTypes.string.isRequired,
	genre: PropTypes.string.isRequired,
	pages: PropTypes.number.isRequired,
	synopsis: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
};*/

/*
	<p>{ISBN}</p>
		<p>{title}</p>
		<p>{author.name}</p>

		<p>{genre}</p>
		<p>{synopsis}</p>
		<p>{year}</p>
		<p>{pages}</p>
*/
