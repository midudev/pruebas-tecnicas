import { Author } from "./Author";

export interface Book {
	title: string;
	pages: number;
	genre: string;
	cover: string;
	synopsis: string;
	year: number;
	ISBN: string;
	author: Author;
}

export interface BookElement {
	book: Book;
}
