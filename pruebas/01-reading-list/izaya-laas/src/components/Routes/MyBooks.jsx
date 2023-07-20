import { currentPath } from '../../signals/store';

const MyBooks = () => {
	currentPath.value = '/my-books';

	console.log('Render My books');
	return <div>MyBooks</div>;
};

export default MyBooks;
