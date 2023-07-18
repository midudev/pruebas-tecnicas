import { createContext, useState } from 'react';
import { ListOfBooks } from '../types/books';

interface FilterContext {
  filters: {
    pages: number;
    genre: string;
  };
  filterBooks: (books: ListOfBooks) => ListOfBooks;
  filterByPages: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterByGenre: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface Props {
  children: React.ReactNode;
}

export const FilterContext = createContext<FilterContext>({} as FilterContext);

export function FilterProvider({ children }: Props) {
  const [filters, setFilters] = useState({
    pages: 0,
    genre: 'All',
  });

  const filterBooks = (books: ListOfBooks) => {
    return books.filter((book) => {
      return (
        book.pages >= filters.pages &&
        (filters.genre === 'All' || book.genre === filters.genre)
      );
    });
  };

  const filterByPages = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setFilters((prevState) => ({
      ...prevState,
      pages: Number(e.target.value),
    }));
  };

  const filterByGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    return setFilters((prevState) => ({
      ...prevState,
      genre: e.target.value,
    }));
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        filterBooks,
        filterByPages,
        filterByGenre,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
