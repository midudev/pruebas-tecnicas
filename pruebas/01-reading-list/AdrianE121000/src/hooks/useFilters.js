import { useContext } from 'react';
import { FiltersContext } from '../context/filters';

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterBooks = (books) => {
    return books.filter((book) => {
      return (
        book.book.pages >= filters.pages &&
        (filters.genre === 'Todos' || book.book.genre === filters.genre)
      );
    });
  };

  return { filters, setFilters, filterBooks };
}
