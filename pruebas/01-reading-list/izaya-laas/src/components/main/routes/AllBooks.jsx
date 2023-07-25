import { localPathname } from '../../../helpers/localPathname';
import { allBooks, currentPath } from '../../../signals/store';
import RenderBooks from '../../main/RenderBooks';

const AllBooks = () => {
  currentPath.value = localPathname();

  return <RenderBooks books={allBooks.value} />;
};

export default AllBooks;
