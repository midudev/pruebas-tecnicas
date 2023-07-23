import { DRAG_EVENTS } from '../constants'
import { useBook } from '../hooks/useBook'
import { type Book } from '../types'
import { SpeakerOutline, GridPlus } from './Icons'
import { Image } from './Image'

interface Props {
  book: Book
}

export const BookItem: React.FC<Props> = ({ book }) => {
  const { addFavorite } = useBook()

  const handleDrag = (event: React.DragEvent<HTMLLIElement>) => {
    event.dataTransfer.setData(DRAG_EVENTS.ADD_TO_FAVORITES, book.ISBN)
  }

  const handleAddToFavorites = () => {
    addFavorite({ newFavorite: book })
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(book.synopsis)
    window.speechSynthesis.speak(utterance)
  }

  return (
		<li
			className="relative bg-gray-50 border border-gray-200 rounded-2xl p-2 flex justify-between items-center h-44"
			draggable={true}
			onDragStart={handleDrag}
		>
			<div className="w-2/3 flex flex-col justify-between items-start px-2 h-full">
				<div className="flex justify-between items-center w-full">
					<button role='add-button' className="cursor-pointer" onClick={handleAddToFavorites}>
						<GridPlus />
					</button>
					<button role='speak-button' onClick={handleSpeak}>
						<SpeakerOutline />
					</button>
					<p className="bg-gray-200 py-1 px-2 text-gray-400 border-gray-300 border rounded-full text-xs font-bold">
						{book.genre}
					</p>
				</div>
				<div className="flex flex-col">
					<p className="font-bold text-lg">{book.title}</p>
					<p className="text-gray-400 text-xs font-semibold">{`${book.author.name} - ${book.year}`}</p>
				</div>
				<div className="flex gap-1 justify-between items-center w-full">
					<p className="text-gray-500 text-sm font-medium">{`${book.pages} pages`}</p>
				</div>
			</div>
			<Image alt={book.title} src={book.cover} className="w-1/3 rounded-xl overflow-hidden h-full bg-white shadow-md" />
		</li>
  )
}
