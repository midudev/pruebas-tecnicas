import { create } from "zustand"
import { persist } from 'zustand/middleware'

import { TBook } from '../models/types'
import { mapBooks } from '../utilities'

import Books from '../constants/books.json'

interface BooksStore {
	availableBooks: TBook[],
	readingListBooks: TBook[],
	filter: string,
	pages: number,
	setPages: (pages: number) => void,
	setFilter: (filter: string) => void,
	setAvailableBooks: (books: TBook[]) => void,
	setReadingListBooks: (books: TBook[]) => void
	setBooksByFilter: (filter: string, pages: number) => void,
	addBookToList: (ISBN: string) => void,
	removeBookFromList: (ISBN: string) => void,
	clearAll: () => void
}

export const useBooks = create<BooksStore>()(persist(
	(set) => ({
		availableBooks: [],
		readingListBooks: [],
		filter: 'all',
		pages: 0,
		addBookToList: (ISBN) => set((state) => {
			const book = state.availableBooks.find(book => book.ISBN === ISBN)
			const availableBooks = state.availableBooks.filter(book => book.ISBN !== ISBN)
			if (book) {
				return {
					readingListBooks: [...state.readingListBooks, book],
					availableBooks
				}
			}
			return {
				readingListBooks: [...state.readingListBooks]
			}
		}),
		removeBookFromList: (ISBN) => set((state) => {
			const book = state.readingListBooks.find(book => book.ISBN === ISBN)
			if (book) {
				const readingListBooks = state.readingListBooks.filter(book => book.ISBN !== ISBN)
				const availableBooks = state.availableBooks

				let pushBookByFilter = false
				let pushBookByPages = false

				if (state.pages !== 0 && state.pages !== 1500) {
					const min = state.pages
					const max = state.pages + 99
					if (book.pages >= min && book.pages < max) {
						pushBookByPages = true
					}
				}
				else {
					pushBookByPages = true
				}

				if (state.filter === book.genre || state.filter === 'all') {
					pushBookByFilter = true
				}

				pushBookByPages && pushBookByFilter && availableBooks.push(book)

				return {
					readingListBooks,
					availableBooks
				}
			}
			return {
				readingListBooks: [...state.readingListBooks],
				availableBooks: [...state.availableBooks]
			}
		}),
		setBooksByFilter: (filter, pages) => set((state) => {

			const allBooks = mapBooks(Books);
			const filteredBooks = allBooks.filter((book) => book.genre === filter);

			let filteredAvailableBooks: TBook[] = [];
			if (filter === 'all') {
				for (const book of allBooks) {
					if (state.readingListBooks.every((readingBook) => book.ISBN !== readingBook.ISBN)) {
						filteredAvailableBooks.push(book);
					}
				}
			} else {
				for (const book of filteredBooks) {
					if (state.readingListBooks.every((readingBook) => book.ISBN !== readingBook.ISBN)) {
						filteredAvailableBooks.push(book);
					}
				}
			}

			if (pages !== 0 && pages !== 1500) {
				const min = pages
				const max = pages + 99
				filteredAvailableBooks = filteredAvailableBooks.filter(book => book.pages >= min && book.pages < max)
			}
			else if (pages === 1500) {
				filteredAvailableBooks = filteredAvailableBooks.filter(book => book.pages >= pages)
			}

			return {
				availableBooks: [...filteredAvailableBooks]
			}

		}),
		setPages: (pages) => set(() => ({ pages })),
		setFilter: (filter) => set(() => ({ filter })),
		setAvailableBooks: (books) => set(() => ({ availableBooks: books })),
		setReadingListBooks: (books) => set(() => ({ readingListBooks: books })),
		clearAll: () => set(() => ({ availableBooks: [], readingListBooks: [] }))
	}), {
	name: 'books'
}
))