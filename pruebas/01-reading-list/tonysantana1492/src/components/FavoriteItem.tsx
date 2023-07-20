import { useBook } from '../hooks'
import { AngleDown, AngleUp, CloseCircle } from './Icons'
import { type Book } from '../types'
import { Image } from './Image'
import { DRAG_EVENTS } from '../constants'

interface Props {
  book: Book
  index: number
  handleMoveItemPosition: ({ position, index }: { position: number, index: number }) => void
  currentDragOverItem: ({ index }: { index: number }) => void
  dragOverIndex: number | null
}

export const FavoriteItem: React.FC<Props> = ({
  book,
  index,
  handleMoveItemPosition,
  currentDragOverItem,
  dragOverIndex
}) => {
  const { title, cover } = book
  const { removeFromFavorites, favorites } = useBook()

  const handleDrag = (event: React.DragEvent<HTMLLIElement>) => {
    event.dataTransfer.setData(DRAG_EVENTS.REMOVE_FROM_FAVORITES, book.ISBN)
    event.dataTransfer.setData(DRAG_EVENTS.FROM_SORTED_INDEX, String(index))
  }

  const handleDragEnter = () => {
    currentDragOverItem({ index })
  }

  const handleRemoveFromFavorites = () => {
    removeFromFavorites({ bookId: book.ISBN })
  }

  const isFirstPosition = index === 0
  const isLastPosition = index === favorites.length - 1
  const isDragOver = index === dragOverIndex

  return (
		<li
			className={`relative bg-white shadow-sm rounded-2xl p-2 flex justify-between items-center h-36 transition-all ${
				isDragOver ? 'mt-4' : 'mt-0'
			}`}
			draggable={true}
			onDragStart={handleDrag}
			onDragEnter={handleDragEnter}
			onDragOver={event => { event.preventDefault() }}
		>
			<div className="w-2/3 flex flex-col justify-between items-start px-2 h-full">
				<div className="flex justify-between items-center gap-3 w-full">
					<p className="bg-gray-200 py-1 px-2 text-gray-400 border-gray-300 border rounded-full text-xs font-bold">
						{book.genre}
					</p>
				</div>
				<div className="flex flex-col">
					<p className="font-bold text-lg">{book.title}</p>
					<p className="text-gray-400 text-xs font-semibold">{`${book.author.name} - ${book.year}`}</p>
				</div>
				<div className="flex justify-between items-center w-full">
					<p className="text-gray-500 text-sm font-medium">{`${book.pages} pages`}</p>
					<div className="flex justify-between h-full items-center gap-3">
						<button
							className="cursor-pointer disabled:cursor-default w-5 h-5 rounded-full flex justify-center items-center bg-slate-800 disabled:bg-gray-400"
							disabled={isFirstPosition}
							onClick={() => { handleMoveItemPosition({ position: -1, index }) }}
						>
							<AngleUp className="w-3 h-3 text-white" />
						</button>

						<button
							className="cursor-pointer disabled:cursor-default w-5 h-5 rounded-full flex justify-center items-center bg-slate-800 disabled:bg-gray-400"
							disabled={isLastPosition}
							onClick={() => { handleMoveItemPosition({ position: 1, index }) }}
						>
							<AngleDown className="w-3 h-3 text-white" />
						</button>
					</div>
				</div>
			</div>
			<Image alt={title} src={cover} className="w-1/3 rounded-xl h-full overflow-hidden bg-gray-100 shadow-md" />
			<button
				className="cursor-pointer absolute top-[-6px] right-[-6px] w-5 h-5"
				onClick={handleRemoveFromFavorites}
			>
				<CloseCircle />
			</button>
		</li>
  )
}
