// import { library as books } from '../../database/books.json';
import { allBooks, currentPath, myReadingListISBN } from '../../signals/store';
import RenderBooks from '../main/RenderBooks';

const AllBooks = () => {
	currentPath.value = '/';

	return <RenderBooks books={allBooks.value} />;
};

export default AllBooks;
