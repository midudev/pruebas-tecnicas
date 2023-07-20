import { currentPath, myReadingListBooks } from '../../signals/store';
import RenderBooks from '../main/RenderBooks';

const MyBooks = () => {
	currentPath.value = '/my-books';
	console.log('Render My books');

	return (
		<>
			<RenderBooks books={myReadingListBooks.value} />
		</>
	);
};

export default MyBooks;
