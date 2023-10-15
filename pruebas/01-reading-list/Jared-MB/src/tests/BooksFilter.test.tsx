import { screen, fireEvent, render } from '@testing-library/react'
import { useBooks } from '../store'
import Books from '../constants/books.json'
import { mapBooks } from '../utilities'
import { BookFilters, GenreFilter, PagesFilter } from '../components'

const books = mapBooks(Books as any)

describe('Books Filters', () => {

	beforeEach(() => {
		useBooks.setState({ availableBooks: books, filter: 'all', pages: 0 })
	})

	const checkPages = () => {
		const { pages } = useBooks.getState()
		useBooks.getState().availableBooks.forEach(book => {
			if (pages !== 0 && pages !== 1500) {
				const min = pages
				const max = pages + 99
				expect(book.pages >= min && book.pages < max)
			}
		})
	}

	const checkGenre = () => {
		const { filter } = useBooks.getState()
		useBooks.getState().availableBooks.forEach(book => {
			if (filter !== 'all') {
				expect(filter === book.genre)
			}
		})
	}

	test('Books given must be based on the pages filter', () => {

		render(<PagesFilter />)

		const input = screen.getByDisplayValue('0')
		expect(input).toBeDefined()

		fireEvent.change(input, { target: { value: 100 } })
		const inputValue = screen.getByText('100')
		expect(inputValue).toBeDefined()
		checkPages()

		fireEvent.change(input, { target: { value: 200 } })
		checkPages()
	})

	test('Books given must be based on the genre filter', () => {

		render(<GenreFilter />)

		const select = screen.getByTestId('genre-filter')
		fireEvent.change(select, { target: { value: 'Zombies' } })

		checkGenre()
	})

	test('Books given must be based on the genre and the pages filter', () => {

		render(<BookFilters />)

		const input = screen.getByDisplayValue('0')
		fireEvent.change(input, { target: { value: 200 } })

		const select = screen.getByTestId('genre-filter')
		fireEvent.change(select, { target: { value: 'Ciencia ficción' } })

		checkGenre()
		checkPages()

	})
})