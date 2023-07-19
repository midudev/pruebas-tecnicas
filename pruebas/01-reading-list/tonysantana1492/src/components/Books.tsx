import { useBook } from '../hooks'
import { BookList } from './BookList'
import { DRAG_EVENTS } from '../constants'
import { Header } from './Header'

export const Books = () => {
  const { filteredBooks, removeFromFavorites } = useBook()

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const bookId = event.dataTransfer.getData(DRAG_EVENTS.REMOVE_FROM_FAVORITES)
    removeFromFavorites({ bookId })
  }

  return (
		<section
			className="flex flex-col px-4 gap-4 w-full"
			onDrop={handleDrop}
			onDragOver={event => { event.preventDefault() }}
		>
			<Header />
			<BookList books={filteredBooks} />
		</section>
  )
}
