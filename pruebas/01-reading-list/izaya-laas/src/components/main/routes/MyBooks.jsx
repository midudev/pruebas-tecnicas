import { filterBooks } from '../../../filters/filterBooks';
import { localPathname } from '../../../utils/localPathname';
import { filterOptions } from '../../../signals/inputs.signals';
import {
  currentPath,
  myReadingListBooks,
  myReadingListISBN,
} from '../../../signals/store';
import HasNotBeenFound from '../HasNotBeenFound';
import RenderBooks from '../../main/RenderBooks';
import { notFoundLogs } from '../../../utils/notFoundLogs';

const MyBooks = () => {
  currentPath.value = localPathname();

  const books = filterBooks(
    myReadingListBooks.value,
    filterOptions.value,
    myReadingListISBN.value,
  );

  if (books.length === 0)
    return <HasNotBeenFound log={notFoundLogs.noRenderMyBooks} />;

  return <RenderBooks books={books} />;
};

export default MyBooks;
