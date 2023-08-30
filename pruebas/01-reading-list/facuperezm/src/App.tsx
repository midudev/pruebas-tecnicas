import { useEffect, useState } from 'react'
import BookGrid from './components/BookGrid'
import useBooks from './hooks/books'
import { Book } from '../src/types'
import ReadingList from './components/ReadingList'
import { Combobox } from './components/Combobox'
import ModeToggle from './components/ModeToggle'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Slider } from './components/ui/slider'

function App() {
	const { booksArray } = useBooks()
	const [pages, setPages] = useState([40])
	const [value, setValue] = useState('')
	const [search, setSearch] = useState('')

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

	// this function filters the books based on the search term and the number of pages
	const filteredBooks = unselectedBooks.filter(book => {
		const hasMatchingPages = book.pages >= pages[0]
		const normalizedGenre = book.genre
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '') // Normalizar el género del libro

		const normalizedBookTitle = book.title
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '') // Normalizar el título del libro

		const normalizedSearchTerm = value
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '') // Normalizar el término de búsqueda

		const normalizedSearchBarTerm = search
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '') // Normalizar el término de búsqueda

		const hasMatchingGenre = normalizedGenre
			.toLowerCase()
			.includes(normalizedSearchTerm.toLowerCase())

		const hasMatchingSearchTerm = normalizedBookTitle
			.toLowerCase()
			.includes(normalizedSearchBarTerm.toLowerCase())

		return hasMatchingPages && hasMatchingGenre && hasMatchingSearchTerm
	})

	return (
		<main className='flex min-h-screen mx-2 bg-background text-foreground'>
			<header className='flex flex-col w-full mx-auto'>
				<h1 className='py-4 text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl'>
					{unselectedBooks.length} libros disponibles
				</h1>
				<h2 className='pb-2 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0'>
					{selectedBooks.length} libros seleccionados
				</h2>

				<nav className='flex flex-col items-center justify-between w-full gap-3 p-3 my-2 border rounded-md md:flex-row'>
					<Label htmlFor='pages' className='flex items-center gap-2'>
						Páginas:
					</Label>
					<Slider
						className='max-w-xs'
						max={1000}
						step={10}
						value={pages}
						onValueChange={setPages}
					/>

					<Input
						className='max-w-md'
						type='text'
						id='search'
						value={search}
						placeholder='Buscar por título'
						onChange={e => setSearch(e.target.value)}
					/>
					<div className='flex flex-row gap-4'>
						<Combobox value={value} setValue={setValue} />
						<div className='top-2 right-2'>
							<ModeToggle />
						</div>
					</div>
				</nav>
				{filteredBooks.length > 0 && (
					<BookGrid books={filteredBooks} handleSelect={toggleBook} />
				)}
			</header>
			{selectedBooks.length > 0 && (
				<ReadingList books={selectedBooks} handleRemove={toggleBook} />
			)}
		</main>
	)
}

export default App
