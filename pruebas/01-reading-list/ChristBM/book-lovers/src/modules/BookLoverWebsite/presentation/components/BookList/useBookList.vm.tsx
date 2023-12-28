import { useContext } from 'react';
import { Props as InfiniteScrollProps } from 'react-infinite-scroll-component';

import MainCtx from '@commonContext/MainCtx/MainCtx';
import useFilterData from '@websiteUtils/hooks/useFilterData';
import usePagination from '@websiteUtils/hooks/usePagination';

export default function useBookList() {
  const { states: { booksAdded }, activateAlert, handleBooksAdded } = useContext(MainCtx);

  const { listOfBooks } = useFilterData();
  const { list, hasMore, fetchOneMore } = usePagination({
    delayInMS: 1500,
    itemsPerCall: 8,
    listOfBooks,
  });

  const addToReadingList = (id: number) => {
    const message = handleBooksAdded(id, 'add');

    if (message === 'added') activateAlert();
  };

  const infiniteScrollProps: InfiniteScrollProps = {
    dataLength: list.length,
    hasMore,
    next: fetchOneMore,
    children: undefined,
    loader: undefined,
  };

  return {
    list,
    booksAdded,
    infiniteScrollProps,
    addToReadingList,
  };
}
