import { useState } from 'react'
import DATA from '../../books.json'
import BookGrid from './components/BookGrid'

function App() {
	const [books, setBooks] = useState(DATA.library)

	function toggleBook(toggledBook) {
		const nextBooks = books.filter(book => book.isbn !== toggledBook.isbn)

		nextBooks.push({
			...toggledBook,
			selected: !toggledBook.selected
		})

		setBooks(nextBooks)
	}

	const selectedBooks = books.filter(book => book.selected)
	const unselectedBooks = books.filter(book => !book.selected)

	return (
		<main>
			<h1 className='text-center py-2 font-bold text-2xl'>Reading List</h1>
			<BookGrid books={unselectedBooks} handleSelect={toggleBook} />
			{unselectedBooks.length > 0 && (
				<section>
					<h2 className='text-center py-2 font-bold text-2xl'>
						Selected Books
					</h2>
					{unselectedBooks.map(book => (
						<div key={book.ISBN} className='flex flex-col items-center'>
							<img
								src={book.cover}
								className='block object-cover rounded-lg will-change-transform aspect-[7.25/11]'
							/>
							<button
								className='text-center py-2 font-bold text-2xl'
								onClick={() => toggleBook(book)}
							>
								{book.title}
							</button>
						</div>
					))}
				</section>
			)}
		</main>
	)
}

export default App
