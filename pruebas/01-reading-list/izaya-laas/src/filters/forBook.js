import { filterOptions } from '../signals/inputs.signals';
import { myReadingListISBN } from '../signals/store';

export const filterBooks = (books) => {
	const { excludeBooks, genre, pages, specificBook } = filterOptions.value;
	const [min, max] = pages;
	let booksFiltered = books;

	if (excludeBooks && myReadingListISBN.value.length > 0) {
		booksFiltered = books.filter((book) => {
			return !myReadingListISBN.value.includes(book.ISBN);
		});
	}

	if (specificBook && booksFiltered) {
		booksFiltered = booksFiltered.filter((book) =>
			book.title.toLowerCase().includes(specificBook.toLocaleLowerCase())
		);
	}

	if (genre !== 'any') {
		booksFiltered = booksFiltered.filter((book) => book.genre === genre);
	}

	if (min || max) {
		if (min && !max) {
			booksFiltered = booksFiltered.filter((book) => {
				return Number(book.pages) >= Number(min);
			});
		} else if (!min && max) {
			booksFiltered = booksFiltered.filter((book) => {
				return Number(book.pages) <= Number(max);
			});
		} else if (min && max) {
			booksFiltered = booksFiltered.filter((book) => {
				return (
					Number(book.pages) >= Number(min) && Number(book.pages) <= Number(max)
				);
			});
		}
	}

	return booksFiltered;
};
