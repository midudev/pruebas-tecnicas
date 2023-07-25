import { filterBooks } from '../../../filters/filterBooks';
import { localPathname } from '../../../utils/localPathname';
import { filterOptions } from '../../../signals/inputs.signals';
import {
  allBooks,
  currentPath,
  myReadingListISBN,
} from '../../../signals/store';
import RenderBooks from '../../main/RenderBooks';
import { notFoundLogs } from '../../../utils/notFoundLogs';
import HasNotBeenFound from '../HasNotBeenFound';

const AllBooks = () => {
  currentPath.value = localPathname();

  const books = filterBooks(
    allBooks.value,
    filterOptions.value,
    myReadingListISBN.value,
  );

  if (books.length === 0)
    return <HasNotBeenFound log={notFoundLogs.noRenderAllBooks} />;

  return <RenderBooks books={books} />;
};

export default AllBooks;
