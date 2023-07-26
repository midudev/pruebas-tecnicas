import {BookTypes} from '../enums';
import {Book, BookElement} from '../interfaces/Book';

type Filters = {
	genre: string;
	search: string;
};

export type InitialBookState = {
	books: Array<BookElement>;
	favorites: Array<Book>;
	filters: Filters;
	bookPreview: Book | null;
	genres: Array<string>;
	loading: boolean;
	error: string | null;
};

export type BookAction = {
	type: BookTypes;
	payload: Book | Array<Book>;
};