import { expect, test } from 'vitest'
import useBooks from '../hooks/books'

test('getBooks', () => {
	const { booksArray } = useBooks()
	expect(booksArray.length).greaterThan(0)
})
