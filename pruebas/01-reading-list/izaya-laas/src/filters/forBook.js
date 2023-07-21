import { filterOptions } from '../signals/inputs.signals';
import { myReadingListISBN } from '../signals/store';

const normalizeText = (text) =>
	text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

//range filter functions
const rangeFilters = {
	onlyMin: (books, { min }) => {
		return books.filter((book) => Number(book.pages) >= Number(min));
	},
	onlyMax: (books, { max }) => {
		return books.filter((book) => {
			return Number(book.pages) <= Number(max);
		});
	},
	both: (books, { min, max }) => {
		return books.filter((book) => {
			return (
				Number(book.pages) >= Number(min) && Number(book.pages) <= Number(max)
			);
		});
	},
};

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
		booksFiltered = booksFiltered.filter((book) => {
			return normalizeText(book.genre).toLowerCase() === genre;
		});
	}

	if (min || max) {
		if (min && !max) {
			booksFiltered = rangeFilters.onlyMin(booksFiltered, { min });
		} else if (!min && max) {
			booksFiltered = rangeFilters.onlyMax(booksFiltered, { max });
		} else if (min && max) {
			booksFiltered = rangeFilters.onlyMax(booksFiltered, { min, max });
		}
	}

	return booksFiltered;
};
