import { mapBooks } from "."
import Books from '../constants/books.json'

describe('Books', () => {
	test('The JSON file should be converted to an array', () => {
		const books = mapBooks(Books)
		expect(Array.isArray(books)).toBeTruthy()
	})

	test('The JSON file should be an array an its items must be objects', () => {
		const books = mapBooks(Books)
		books.forEach(book => {
			expect(book).toBeTypeOf('object')
		})
	})

	test('The items must important properties like title, pages, cover, ISBN, genre', () => {
		const books = mapBooks(Books)
		books.forEach(book => {
			expect(book).toHaveProperty('title')
			expect(book).toHaveProperty('pages')
			expect(book).toHaveProperty('cover')
			expect(book).toHaveProperty('ISBN')
			expect(book).toHaveProperty('genre')
		})
	})
})