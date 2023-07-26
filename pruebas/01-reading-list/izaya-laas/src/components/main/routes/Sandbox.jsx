import {
  allBooks,
  currentPath,
  myReadingListBooks,
  myReadingListISBN,
  myReadingListLength,
  totalFreeBooks,
} from '../../../signals/store';

import RenderBooks from '../RenderBooks';
import { localPathname } from '../../../utils/localPathname';
import { filterBooks } from '../../../filters/filterBooks';
import HasNotBeenFound from '../HasNotBeenFound';
import { filterOptions } from '../../../signals/inputs.signals';
import GridList from '../GridList';
import { notFoundLogs } from '../../../utils/notFoundLogs';

const Sandbox = () => {
  currentPath.value = localPathname();

  const freeBooks = filterBooks(
    allBooks.value,
    {
      ...filterOptions.value,
      excludeBooks: true,
    },
    myReadingListISBN.value,
  );

  const handleDeleteToMyReadingList = (e) => {
    const bookId = e.dataTransfer.getData('bookId');
    const newList = myReadingListISBN.value.filter((ISBN) => ISBN !== bookId);
    myReadingListISBN.value = newList;
  };

  const handleAddToMyReadingList = (e) => {
    const bookId = e.dataTransfer.getData('bookId');
    myReadingListISBN.value = [bookId, ...myReadingListISBN.value];
  };

  return (
    <>
      <div className="grid w-full grid-flow-row grid-cols-2 gap-x-2 lg:gap-x-10 xl:gap-x-20">
        <GridList title="Free Books" handleDrop={handleDeleteToMyReadingList}>
          {freeBooks.length === 0 ? (
            <HasNotBeenFound
              className="col-span-full"
              log={
                totalFreeBooks.value === 0
                  ? notFoundLogs.thereAreNotBooks
                  : notFoundLogs.noRenderMyBooks
              }
            />
          ) : (
            <RenderBooks books={freeBooks} isDrag />
          )}
        </GridList>
        <GridList title="My Reading List" handleDrop={handleAddToMyReadingList}>
          {myReadingListLength.value === 0 ? (
            <HasNotBeenFound
              className="col-span-full"
              log={notFoundLogs.noRenderMyBooks}
            />
          ) : (
            <RenderBooks books={myReadingListBooks.value} isDrag />
          )}
        </GridList>
      </div>
    </>
  );
};

export default Sandbox;
