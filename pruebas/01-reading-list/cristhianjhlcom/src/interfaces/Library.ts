import {Book} from './Book';

export interface Library {
	library: LibraryElement[];
}

export interface LibraryElement {
	book: Book;
}
