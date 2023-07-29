import { useContext } from 'react';
import { FiltersContext } from '../context/filters.jsx';

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterBooks = (books) => {
    return books.filter(({ book }) => {
      return (
        (filters.genre === 'all' || book.genre === filters.genre) &&
        (filters.author === 'all' || book.author.name === filters.author) &&
        (filters.search === '' || book.title.toLowerCase().trim().includes(filters.search))
      );
    });
  };

  return { filters, filterBooks, setFilters };
}
