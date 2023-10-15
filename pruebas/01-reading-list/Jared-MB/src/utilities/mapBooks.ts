import type { TRoot, TBook } from "../models/types";

export const mapBooks = (json: TRoot): TBook[] => {
	const library = json.library
	const books = []
	for (let i = 0; i < library.length; i++) {
		books.push(library[i].book)
	}
	return books
}