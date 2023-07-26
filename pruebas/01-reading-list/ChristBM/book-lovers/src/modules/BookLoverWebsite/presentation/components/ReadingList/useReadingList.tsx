import { useContext, useMemo } from 'react';
import MainCtx from '@commonContext/MainCtx/MainCtx';
import getBooks from '@websiteApi/getBooks';
import { BookWithIdType } from '@websiteApi/Interfaces';

export default function useReadingList() {
  const {
    states: { openAside, booksAdded },
    handleBooksAdded,
    handlePriority,
  } = useContext(MainCtx);

  const listOfBooks = getBooks();

  const readingList = useMemo(() => {
    const added = listOfBooks.filter(({ id }) => booksAdded.includes(id));

    return booksAdded.map((id) => (added.find((book) => book.id === id)) as BookWithIdType);
  }, [booksAdded]);

  const removeFromReadingList = (id: number) => {
    handleBooksAdded(id, 'remove');
  };

  return {
    openAside,
    readingList,
    removeFromReadingList,
    handlePriority,
  };
}
