import { currentPath, myReadingListBooks } from '../../signals/store';
import RenderBooks from '../main/RenderBooks';

const MyBooks = () => {
	currentPath.value = '/my-books';

	return (
		<>
			<RenderBooks books={myReadingListBooks.value} />
		</>
	);
};

export default MyBooks;
