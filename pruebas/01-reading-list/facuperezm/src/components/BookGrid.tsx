import { Book } from '../types'

interface BookGridProps {
	books: Book[]
	handleSelect: (book: Book) => void
}

function BookGrid({ books, handleSelect }: BookGridProps) {
	return (
		<section className='flex-1 p-4 rounded-md'>
			<ul className='grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] content-start gap-2 min-h-screen'>
				{books.map(book => (
					<li key={book.title}>
						<button
							onClick={() => handleSelect(book)}
							className='relative block p-0 border-none cursor-pointer transparent'
						>
							<img
								src={book.cover}
								className='block object-cover rounded-lg will-change-transform aspect-[7.25/11]'
							/>
						</button>
					</li>
				))}
			</ul>
		</section>
	)
}

export default BookGrid
