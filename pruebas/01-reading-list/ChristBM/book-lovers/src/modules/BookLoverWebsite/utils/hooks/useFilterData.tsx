import { useContext, useEffect, useState } from 'react';
import getBooks from '@websiteApi/getBooks';
import MainCtx from '@commonContext/MainCtx/MainCtx';
import { MasterFilterArgs } from './Interfaces';

const initialState = getBooks();

export const SEARCH_BY_OPTS = ['title', 'year', 'ISBN', 'author'];

const filterByPages = (rangeValue: number, listOfBooks: typeof initialState) => (
  listOfBooks.filter(({ book }) => book.pages <= rangeValue)
);

const filterByGenre = (genre: string, listOfBooks: typeof initialState) => {
  if (genre.length) {
    return listOfBooks.filter(({ book }) => book.genre.toLowerCase() === genre.toLowerCase());
  }

  return listOfBooks;
};

const searchFilter = (searchBy: string, inputText: string, listOfBooks: typeof initialState) => {
  if (SEARCH_BY_OPTS.includes(searchBy) && inputText.length >= 1) {
    switch (searchBy) {
      case SEARCH_BY_OPTS[0]:
        return listOfBooks.filter(({ book }) => (
          book.title.toLowerCase().includes(inputText.trim().toLowerCase())));
      case SEARCH_BY_OPTS[1]:
        return listOfBooks.filter(({ book }) => book.year.toString().includes(inputText.trim()));
      case SEARCH_BY_OPTS[2]:
        return listOfBooks.filter(({ book }) => (
          book.ISBN.toLowerCase().includes(inputText.trim().toLowerCase())));
      case SEARCH_BY_OPTS[3]:
        return listOfBooks.filter(({ book }) => (
          book.author.name.toLowerCase().includes(inputText.trim().toLowerCase())));
      default:
        return [];
    }
  }

  return listOfBooks;
};

const masterFilter = ({
  rangeValue, genre, listOfBooks, searchBy, inputText,
}: MasterFilterArgs) => (
  searchFilter(searchBy, inputText, filterByPages(rangeValue, filterByGenre(genre, listOfBooks)))
);

export default function useFilterData() {
  const [listOfBooks, setListOfBooks] = useState<typeof initialState>(initialState);

  const { states: { rangeValue, selectedOpt, searchCriteria } } = useContext(MainCtx);

  useEffect(() => {
    setListOfBooks(masterFilter({
      rangeValue,
      genre: selectedOpt,
      listOfBooks: initialState,
      searchBy: searchCriteria.searchBy,
      inputText: searchCriteria.inputText,
    }));
  }, [rangeValue, selectedOpt, searchCriteria]);

  return { listOfBooks };
}
