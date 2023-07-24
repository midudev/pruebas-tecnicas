import { filterExcludeBooks } from './filterExcludeBooks';
import { filterGenre } from './filterGenre';
import { filterRange } from './filterRange';
import { filterSpecificBook } from './filterSpecificBook';

export const filterBooks = (books, filterOptions, readingListISBN) => {
  if (!Array.isArray(books)) return [];
  if (!filterOptions) return books;

  const {
    excludeBooks = false,
    genre = 'any',
    pages = ['', ''],
    specificBook = '',
  } = filterOptions;

  let [min, max] = pages;

  if (!Number(min)) min = '';
  if (!Number(max)) max = '';
  let booksFiltered = books;

  if (excludeBooks && readingListISBN?.length > 0) {
    booksFiltered = filterExcludeBooks(books, readingListISBN);
  }

  if (specificBook) {
    booksFiltered = filterSpecificBook(booksFiltered, specificBook);
  }

  if (genre !== 'any') {
    booksFiltered = filterGenre(booksFiltered, genre);
  }

  if (min || max) {
    if (min && !max) {
      booksFiltered = filterRange.onlyMin(booksFiltered, { min });
    } else if (max && !min) {
      booksFiltered = filterRange.onlyMax(booksFiltered, { max });
    } else if (min && max) {
      booksFiltered = filterRange.both(booksFiltered, { min, max });
    }
  }

  return booksFiltered;
};
