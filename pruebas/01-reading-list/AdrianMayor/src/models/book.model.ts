import { Author } from "./author.model";

export interface LibraryItem {
	book: Book;
}

export interface BookResponse {
	library: LibraryItem[];
}

export interface RawBook {
	book: Book;
}

export interface Book extends BookBase {
	availability: boolean;
}

export interface BookBase {
	title: string;
	pages: number;
	genre: string;
	cover: string;
	synopsis: string;
	year: number;
	ISBN: string;
	author: Author;
	priority?: number;
}
