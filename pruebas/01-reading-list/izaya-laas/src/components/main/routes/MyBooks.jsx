import { localPathname } from '../../../helpers/localPathname';
import { currentPath, myReadingListBooks } from '../../../signals/store';
import RenderBooks from '../../main/RenderBooks';

const MyBooks = () => {
  currentPath.value = localPathname();

  return (
    <>
      <RenderBooks books={myReadingListBooks.value} />
    </>
  );
};

export default MyBooks;
