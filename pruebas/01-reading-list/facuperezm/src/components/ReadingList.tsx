import { X } from 'lucide-react'
import { Book } from '../types'

interface ReadingListProps {
	books: Book[]
	handleRemove: (book: Book) => void
}

function ReadingList({ books, handleRemove }: ReadingListProps) {
	return (
		<section className='p-4 ml-2 rounded-md text-secondary-foreground w-72 bg-secondary animate-show-list'>
			<h2 className='pb-2 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0'>
				Selected Books
			</h2>
			<ol>
				{books.map(book => {
					return (
						<li
							key={book.ISBN}
							className='relative flex flex-col items-center h-20'
						>
							<img
								src={book.cover}
								className='block object-cover rounded-lg will-change-transform aspect-[7.25/11]'
							/>
							<button
								className='absolute text-2xl font-bold text-center border-none rounded-md cursor-pointer bg-secondary-background align-center backdrop-blur-lg top-1 right-1 font-secondary-foreground animate-show-list'
								onClick={() => handleRemove(book)}
							>
								<X />
							</button>
						</li>
					)
				})}
			</ol>
		</section>
	)
}

export default ReadingList
