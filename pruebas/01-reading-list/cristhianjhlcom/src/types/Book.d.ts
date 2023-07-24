import {BookTypes} from '../enums';
import {Book} from '../interfaces/Book';

export type InitialBookState = {
	books: Array<BookElement>;
	filteredBooks: Array<BookElement>;
	favorites: Array<Book>;
	selectedGenre: string;
	bookPreview: Book | null;
	genres: Array<string>;
	loading: boolean;
	error: string | null;
};

export type BookAction = {
	type: BookTypes;
	payload: Book | Array<Book>;
};
