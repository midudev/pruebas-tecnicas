export const genres = ['Ciencia ficción', 'Fantasía', 'Terror', 'Zombies']

export interface TAuthor {
	name: string,
	otherBooks: string[],
}

export interface TBook {
	title: string,
	pages: number,
	genre: string,
	cover: string,
	synopsis: string,
	year: number,
	ISBN: string,
	author: TAuthor,
}

export interface TRoot {
	library: Library[]
}

export interface Library {
	book: TBook
}

export type ElementBookProps = Pick<TBook, 'ISBN' | 'cover' | 'title' | 'author'>