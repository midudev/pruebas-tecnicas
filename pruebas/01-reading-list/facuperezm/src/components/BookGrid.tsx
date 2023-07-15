export interface Book {
	title: string
	pages: number
	genre: string
	cover: string
	synopsis: string
	year: number
	isbn: string
	author: {
		name: string
		otherBooks: string[]
	}
}

interface BookGridProps {
	books: Book[]
	handleSelect: (book: Book) => void
}

function BookGrid({ books, handleSelect, ...delegated }: BookGridProps) {
	return (
		<section {...delegated}>
			<ul className='grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] content-start gap-2 min-h-screen'>
				{books.map(item => (
					<li key={item.isbn}>
						<button onClick={() => handleSelect(item.book)}>
							<img
								src={item.book.cover}
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
