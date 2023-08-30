import { describe, it, expect } from 'vitest';
import JsonBooks from './json-test.json'
import {filterBooks, getOneBook} from '$lib/services/bookService.js'

describe('Books', () => {

	const books   = JsonBooks.library.map(book => {
        return book.book
    }) 

	it('check size de json books equals 13', () => {
		expect(books.length).toBe(13);
	});

	it('Filter by 500 pages equals to 10 books', () => {
		const filters = {
			gender : '',
			pages  : 500,
			search : ''
		}

		const leakedBooks = filterBooks(books, filters)

		expect(leakedBooks.length).toBe(10)
	});

	it('Filter by 800 pages and Geder "Fantasía" equals to 2 books', () => {
		const filters = {
			gender : 'Fantasía',
			pages  : 800,
			search : ''
		}

		const leakedBooks = filterBooks(books, filters)
		expect(leakedBooks.length).toBe(2)
	});

	it('Filter by 1200 pages and Geder "Terror" and Text "historia" equals to 2 books', () => {
		const filters = {
			gender : 'Terror',
			pages  : 1200,
			search : 'historia'
		}

		const leakedBooks = filterBooks(books, filters)
		expect(leakedBooks.length).toBe(2)
	});

	it('Filter by Initial filters equals to 13 books', () => {
		const filters = {
			gender : '',
			pages  : 1200,
			search : ''
		}

		const leakedBooks = filterBooks(books, filters)
		expect(leakedBooks.length).toBe(13)
	});


	it('Show specifict book', () => {
		const isbn = '978-0486411095'
		const book = getOneBook(isbn)

		expect(book.title).toBe('Drácula')
	});

});
