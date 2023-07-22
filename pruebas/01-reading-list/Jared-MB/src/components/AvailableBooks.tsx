import { AnimationGroup, Image } from ".";
import { useBooks } from "../store";

export default function AvailableBooks() {

	const availableBooks = useBooks(state => state.availableBooks)

	return (
		<div data-testid='available-list-books' className='flex flex-wrap gap-4 justify-evenly overflow-y-scroll h-[calc(100vh-6rem)] p-4'>
			<AnimationGroup>
				{
					availableBooks.map((book, idx) => (
						<Image key={book.ISBN} src={book.cover} ISBN={book.ISBN} index={idx} title={book.title} />
					))
				}
			</AnimationGroup>
		</div>
	)
}