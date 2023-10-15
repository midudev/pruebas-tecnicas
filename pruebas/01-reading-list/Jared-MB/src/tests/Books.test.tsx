import { vi } from 'vitest'
import { fireEvent, render, screen } from "@testing-library/react"

import { mapBooks } from "../utilities"
import { useBooks } from "../store"

import { AvailableListBooks, ReadingListBooks } from "../components"

import Books from '../constants/books.json'

const IntersectionObserverMock = vi.fn(() => ({
	disconnect: vi.fn(),
	observe: vi.fn(),
	takeRecords: vi.fn(),
	unobserve: vi.fn(),
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

const books = mapBooks(Books)

describe('Images', () => {

	const exampleBooks = [books[0], books[1]]

	beforeEach(() => {
		useBooks.setState({ availableBooks: [], readingListBooks: [] })
	})

	test('When image is clicked, the book must be change to the reading list books', () => {
		useBooks.setState({ availableBooks: exampleBooks })

		render(<AvailableListBooks />)

		const list = screen.getByTestId('available-list-books')
		expect(list.childNodes).toHaveLength(exampleBooks.length)

		const bookToChange = exampleBooks[1]

		let image: HTMLElement | undefined = undefined
		list.childNodes.forEach((node: any) => {
			if (node.getAttribute('id') === bookToChange.ISBN) {
				image = node
			}
		})

		expect(image).toBeDefined()

		if (image) {
			fireEvent.click(image)
			expect(useBooks.getState().availableBooks).toHaveLength(exampleBooks.length - 1)
			expect(useBooks.getState().readingListBooks).toHaveLength(1)

			const book = useBooks.getState().readingListBooks.find(bk => bk.ISBN === bookToChange.ISBN)
			expect(book).toBeDefined()
		}
	})

	test('When book is on reading list books, you can eliminated and it will return to available books', () => {
		useBooks.setState({ readingListBooks: exampleBooks })

		render(<ReadingListBooks />)

		const list = screen.getByTestId('reading-list-books')
		expect(list.childNodes).toHaveLength(exampleBooks.length)

		const bookToChange = exampleBooks[1]

		let image: HTMLElement | undefined = undefined
		list.childNodes.forEach((node: any) => {
			if (node.getAttribute('id') === bookToChange.ISBN) {
				image = node
			}
		})

		expect(image).toBeDefined()
		if (image) {
			fireEvent.mouseEnter(image)

			const closeButton = screen.getByTitle('Eliminar')
			expect(closeButton).toBeDefined()

			fireEvent.click(closeButton)

			expect(useBooks.getState().readingListBooks).toHaveLength(exampleBooks.length - 1)
			expect(useBooks.getState().availableBooks).toHaveLength(1)

			const book = useBooks.getState().availableBooks.find(bk => bk.ISBN === bookToChange.ISBN)
			expect(book).toBeDefined()

		}
	})
})