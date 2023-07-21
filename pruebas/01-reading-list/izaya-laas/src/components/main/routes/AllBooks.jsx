import { allBooks, currentPath } from '../../../signals/store';
import RenderBooks from '../../main/RenderBooks';

const AllBooks = () => {
	currentPath.value = '/';

	return <RenderBooks books={allBooks.value} />;
};

export default AllBooks;
