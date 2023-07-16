import books from '../../../books.json'

export default function useBooks() {
	const booksArray = books.library.map(book => {
		return book.book
	})

	return { booksArray }
}
