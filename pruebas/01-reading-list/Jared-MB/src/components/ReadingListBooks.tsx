import { AnimationGroup, Image } from '.'

import { useBooks } from "../store";

export default function ReadingListBooks() {

	const readingListBooks = useBooks(state => state.readingListBooks)

	return (
		<section className='basis-1/5 p-4 flex flex-col items-center gap-4 border-l-2 border-l-zinc-300'>
			<h2 className='text-2xl text-purple-700'>Lista de lectura ({readingListBooks.length})</h2>
			<div data-testid='reading-list-books' className='flex flex-col h-full overflow-y-scroll w-full'>
				<AnimationGroup>
					{
						readingListBooks.map((book, idx) => (
							<Image key={book.ISBN} src={book.cover} ISBN={book.ISBN} onList index={idx} title={book.title} />
						)).reverse()
					}
				</AnimationGroup>
			</div>
		</section>
	)
}