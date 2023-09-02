import { useEffect, useMemo, useState } from 'react';
import { ListOfBooks } from '@websiteApi/Interfaces';

import { PaginationArgs } from './Interfaces';

/* const initialCount = (itemsPerCall: number, listOfBooksLength: number) => {
  if (itemsPerCall && listOfBooksLength) return Math.ceil(listOfBooksLength / itemsPerCall);
  return 0;
};
 */
const firstNElements = (n: number, array: ListOfBooks) => array.slice(0, n);

export default function usePagination({
  delayInMS,
  listOfBooks,
  itemsPerCall = 10,
}: PaginationArgs) {
  const [count, setCount] = useState<number>(1);
  const [list, setList] = useState<ListOfBooks>(firstNElements(itemsPerCall, listOfBooks));

  const hasMore = useMemo(() => count * itemsPerCall <= listOfBooks.length, [count]);

  const fetchOneMore = () => {
    if (typeof delayInMS === 'number' && hasMore) {
      setTimeout(() => {
        setCount(count + 1);
      }, delayInMS);
    } else if (hasMore) setCount(count + 1);
  };

  useEffect(() => {
    if (count) {
      setList(firstNElements(count * itemsPerCall, listOfBooks));
    }
  }, [count, listOfBooks]);

  return { list, hasMore, fetchOneMore };
}
