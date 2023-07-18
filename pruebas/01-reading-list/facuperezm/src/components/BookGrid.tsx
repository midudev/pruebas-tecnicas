import { Book } from '../types'
import { motion } from 'framer-motion'

interface BookGridProps {
	books: Book[]
	handleSelect: (book: Book) => void
}

function BookGrid({ books, handleSelect }: BookGridProps) {
	return (
		<article className='flex-1 rounded-md'>
			<ul className='grid grid-cols-[repeat(auto-fill,minmax(70px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(140px,1fr))] content-start gap-2 min-h-screen'>
				{books.map(book => (
					<li key={book.title}>
						<button
							onClick={() => handleSelect(book)}
							className='relative block p-0 border-none cursor-pointer transparent'
						>
							<motion.img
								layoutId={`book-${book.ISBN}`}
								draggable={false}
								alt={book.title}
								src={book.cover}
								className='block object-cover rounded-lg will-change-transform aspect-[7.25/10]'
							/>
						</button>
					</li>
				))}
			</ul>
		</article>
	)
}

export default BookGrid
