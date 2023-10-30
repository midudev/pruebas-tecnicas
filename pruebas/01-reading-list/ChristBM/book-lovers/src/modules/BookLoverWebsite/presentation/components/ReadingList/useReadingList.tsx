import { useContext, useMemo } from 'react';
import MainCtx from '@commonContext/MainCtx/MainCtx';
import getBooks from '@websiteApi/getBooks';

export default function useReadingList() {
  const { states: { openAside, booksAdded }, handleBooksAdded } = useContext(MainCtx);

  const listOfBooks = getBooks();

  const readingList = useMemo(() => (
    listOfBooks.filter(({ id }) => booksAdded.includes(id))
  ), [booksAdded]);

  const removeFromReadingList = (id: number) => {
    handleBooksAdded(id, 'remove');
  };

  return { openAside, readingList, removeFromReadingList };
}
