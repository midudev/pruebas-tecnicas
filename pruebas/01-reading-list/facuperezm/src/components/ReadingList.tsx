import { Book } from '../types'

interface ReadingListProps {
	books: Book[]
	handleRemove: (book: Book) => void
}

function ReadingList({ books, handleRemove }: ReadingListProps) {
	return (
		<section className='p-4 text-white rounded-md w-52 bg-zinc-600 animate-showlist'>
			<h2 className='py-2 text-2xl font-bold text-center delay-1000 animate-showlist'>
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
								className='absolute flex items-center justify-center w-2 p-4 py-1 text-2xl font-bold text-center border-none rounded-md cursor-pointer bg-zinc-700 align-center top-1 right-1 font-white animate-showlist'
								onClick={() => handleRemove(book)}
							>
								X
							</button>
						</li>
					)
				})}
			</ol>
		</section>
	)
}

export default ReadingList
