import { useEffect, useState } from 'react'
import BookGrid from './components/BookGrid'
import useBooks from './hooks/books'
import { Book } from '../src/types'
import ReadingList from './components/ReadingList'

function App() {
	const { booksArray } = useBooks()
	const [pages, setPages] = useState(0)
	const [genre, setGenre] = useState('')

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

	const filteredBooks = unselectedBooks.filter(book => {
		const hasMatchingPages = book.pages >= pages
		const normalizedGenre = book.genre
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '') // Normalizar el género del libro
		const normalizedSearchTerm = genre
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '') // Normalizar el término de búsqueda

		const hasMatchingGenre = normalizedGenre
			.toLowerCase()
			.includes(normalizedSearchTerm.toLowerCase())

		return hasMatchingPages && hasMatchingGenre
	})

	return (
		<main className='flex min-h-screen bg-zinc-300'>
			<div className='flex-1'>
				<h1 className='py-2 text-2xl font-bold text-center'>Reading List</h1>
				<header className='flex justify-around w-full mx-auto'>
					<input
						type='range'
						value={pages}
						min={0}
						max={1000}
						onChange={e => setPages(Number(e.target.value))}
					/>
					<input
						type='text'
						value={genre}
						onChange={e => setGenre(e.target.value)}
						className='rounded-md'
					/>
				</header>

				{filteredBooks.length > 0 && (
					<BookGrid books={filteredBooks} handleSelect={toggleBook} />
				)}
			</div>
			{/* <BookGrid books={unselectedBooks} handleSelect={toggleBook} /> */}
			{selectedBooks.length > 0 && (
				<ReadingList books={selectedBooks} handleRemove={toggleBook} />
			)}
		</main>
	)
}

export default App
