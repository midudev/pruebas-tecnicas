import {useContext} from 'react';
import pushButtonSound from '../../assets/sounds/button-push.mp3';
import {BookTypes} from '../../enums';
import {BookElement} from '../../interfaces';
import {BookContext} from '../context';
import {LocalStorageService} from '../services';

const storage = new LocalStorageService<BookElement>('books__list');

export default function useFavorites() {
	const {books, favorites, dispatch} = useContext(BookContext);

	function handleRemoveFromFavoritesClick(favoriteParam) {
		new Audio(pushButtonSound).play();

		const newBooks = books.concat({book: favoriteParam});
		const newFavorites = favorites.filter((book) => {
			return book.ISBN !== favoriteParam.ISBN;
		});

		storage.setItem({
			library: newBooks,
			favorites: newFavorites,
		});

		dispatch({
			type: BookTypes.REMOVE_FROM_FAVORITES,
			payload: {
				books: newBooks,
				favorites: newFavorites,
			},
		});
	}

	return {
		favorites,
		handleRemoveFromFavoritesClick,
	};
}
