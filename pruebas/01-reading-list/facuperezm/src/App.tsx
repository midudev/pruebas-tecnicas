import { useEffect, useState } from 'react'
import BookGrid from './components/BookGrid'
import useBooks from './hooks/books'
import { Book } from '../src/types'
import ReadingList from './components/ReadingList'

function App() {
	const { booksArray } = useBooks()

	const [books, setBooks] = useState<Book[]>(() => {
		const storedBooks = localStorage.getItem('books')
		if (storedBooks) {
			return JSON.parse(storedBooks) as Book[]
		}

		return booksArray
	})

	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(books))
	}, [books])

	// This is the code that makes the app work across multiple tabs
	useEffect(() => {
		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === 'books') {
				const storedBooks = JSON.parse(event.newValue || '[]') as Book[]
				setBooks(storedBooks)
			}
		}

		window.addEventListener('storage', handleStorageChange)

		return () => {
			window.removeEventListener('storage', handleStorageChange)
		}
	})

	function toggleBook(toggledBook: Book) {
		const nextBooks = books.filter(book => book.ISBN !== toggledBook.ISBN)

		nextBooks.push({
			...toggledBook,
			selected: !toggledBook.selected
		})

		setBooks(nextBooks)
	}
	const selectedBooks = books.filter(book => book.selected)
	const unselectedBooks = books.filter(book => !book.selected)

	return (
		<main className='flex min-h-screen'>
			<BookGrid books={unselectedBooks} handleSelect={toggleBook} />
			{selectedBooks.length > 0 && (
				<ReadingList books={selectedBooks} handleRemove={toggleBook} />
			)}
		</main>
	)
}

export default App
