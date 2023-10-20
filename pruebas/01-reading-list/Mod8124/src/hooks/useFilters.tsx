import { IUseFilters, IBooks } from '../interfaces/interfaces';
import { useBooksStore } from '../store/store';

export const useFilters = (): IUseFilters => {
  const booksStore = useBooksStore();
  const { filterByPages, filterByGenre, search, sort } = booksStore;

  // filter books by genre and pages
  const filterBooks = (book: IBooks) => {
    const bookGenre = book.book.genre.toLowerCase();
    const bookPages = book.book.pages;
    const [min, , max] = filterByPages.split(' ');

    return (
      (filterByGenre === '' || bookGenre === filterByGenre.toLowerCase()) &&
      (filterByPages === '' ||
        (min === 'Over'
          ? bookPages >= Number(max)
          : bookPages >= Number(min) && bookPages <= Number(max)))
    );
  };

  const searchBooks = (book: IBooks) =>
    book.book.title.toLowerCase().includes(search.toLowerCase());

  // sort books by author, title and ''(default)
  const sortBooks = (a: IBooks, b: IBooks) => {
    if (sort === 'title') {
      // Sort by title
      const titleA = a.book.title.toLowerCase();
      const titleB = b.book.title.toLowerCase();
      return titleA.localeCompare(titleB);
    } else if (sort === 'Autor') {
      // Sort by author name
      const authorA = a.book.author.name.toLowerCase();
      const authorB = b.book.author.name.toLowerCase();
      return authorA.localeCompare(authorB);
    } else {
      // Default: no sorting or sort by 'Destacados' (original order)
      return 0;
    }
  };

  return {
    filterBooks,
    searchBooks,
    sortBooks,
  };
};
