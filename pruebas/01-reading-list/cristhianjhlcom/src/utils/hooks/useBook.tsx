import {useContext} from 'react';
import pushButtonSound from '../../assets/sounds/button-push.mp3';
import library from '../../data/library';
import {BookTypes} from '../../enums';
import {BookElement} from '../../interfaces';
import {BookContext} from '../context';
import {LocalStorageService} from '../services';

const storage = new LocalStorageService<BookElement>('books__list');

export default function useBook() {
	const {books, bookPreview, booksDialogRef, dispatch} =
		useContext(BookContext);

	function handlePreviewClick(book) {
		dispatch({
			type: BookTypes.SELECT_BOOK,
			payload: book,
		});

		booksDialogRef.current.showModal();
	}

	function handleCloseDialogClick() {
		dispatch({
			type: BookTypes.SELECT_BOOK,
			payload: {},
		});

		booksDialogRef.current.close();
	}

	function handleLoadInitialBooksAndFavorites() {
		const initialData = storage.getItem();
		console.log('storage', initialData);
		if (!initialData) {
			const defaultData = {books: library, favorites: []};
			console.log('default datal', defaultData);
			storage.setItem(defaultData);
			dispatch({
				type: BookTypes.LOAD_BOOKS,
				payload: defaultData,
			});
		} else {
			console.log('initial data', initialData);
			dispatch({
				type: BookTypes.LOAD_BOOKS,
				payload: {
					books: initialData.books,
					favorites: initialData.favorites,
				},
			});
		}
	}

	function handleStorageUpdate(ev) {
		const {key, newValue} = ev;
		if (key === 'books__list') {
			dispatch({
				type: BookTypes.RELOAD,
				payload: JSON.parse(newValue),
			});
		}
	}

	function handleAddToFavoriteClick(bookParam) {
		new Audio(pushButtonSound).play();

		const storageBooks = storage.getItem();
		const newBooks = storageBooks.library.filter((book) => {
			return book.book.ISBN !== bookParam.ISBN;
		});
		const newFavorites = storageBooks.favorites.concat(bookParam);

		storage.setItem({
			library: newBooks,
			favorites: newFavorites,
		});

		dispatch({
			type: BookTypes.ADD_TO_FAVORITE,
			payload: {
				library: newBooks,
				favorites: newFavorites,
			},
		});
	}

	return {
		books,
		bookPreview,
		booksDialogRef,
		dispatch,
		handleCloseDialogClick,
		handlePreviewClick,
		handleStorageUpdate,
		handleLoadInitialBooksAndFavorites,
		handleAddToFavoriteClick,
	};
}
