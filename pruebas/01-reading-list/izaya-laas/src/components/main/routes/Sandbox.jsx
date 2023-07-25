import {
  allBooks,
  currentPath,
  myReadingListBooks,
  myReadingListISBN,
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

  const books = filterBooks(
    allBooks.value,
    {
      ...filterOptions.value,
      excludeBooks: true,
    },
    myReadingListISBN.value,
  );

  if (books.length === 0)
    return <HasNotBeenFound log={notFoundLogs.noRenderAllBooks} />;

  return (
    <>
      <div className="grid w-full grid-flow-row grid-cols-2 gap-x-2 lg:gap-x-20">
        <GridList title="Free Books">
          <RenderBooks
            books={books}
            isDrag
            notFoundLog={notFoundLogs.noRenderAllBooks}
          />
        </GridList>
        <GridList title="My Reading List">
          <RenderBooks
            books={myReadingListBooks.value}
            isDrag
            notFoundLog={notFoundLogs.noRenderMyBooks}
          />
        </GridList>
      </div>
    </>
  );
};

export default Sandbox;
