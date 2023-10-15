import { AnimationGroup } from "..";
import { useBooks } from "../../store";
import { AvailableBook } from "../Books";
import ListLayout from "./ListLayout";

export default function AvailableListBooks() {

	const availableBooks = useBooks(state => state.availableBooks)

	return (
		<ListLayout title={`Libros disponibles (${availableBooks.length})`}>
			<div data-testid='available-list-books' className='grid grid-cols-5 gap-4 relative z-30 pr-4 pb-2'>
				<AnimationGroup>
					{
						availableBooks.map((book) => (
							<AvailableBook key={book.ISBN} cover={book.cover} ISBN={book.ISBN} title={book.title} author={book.author} />
						))
					}
				</AnimationGroup>
			</div>
		</ListLayout >
	)
}