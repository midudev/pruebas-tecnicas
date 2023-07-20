import { BookTypes } from "../enums";
import { Book } from "../interfaces/Book";

export type InitialBookState = {
	books: Array<BookElement>;
	favorites: Array<Book>;
	bookPreview: Book | null;
	categories: Array<string>;
	loading: boolean;
	error: string | null;
};

export type BookAction = {
	type: BookTypes;
	payload: Book | Array<Book>;
};
