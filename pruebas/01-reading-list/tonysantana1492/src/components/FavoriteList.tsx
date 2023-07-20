import { useState } from 'react'

import { type Book } from '../types'
import { FavoriteItem } from './FavoriteItem'
import { useBook } from '../hooks'
import { DRAG_EVENTS } from '../constants'
import NotFoundImage from '../assets/undraw_save_to_bookmarks_re_8ajf.svg'

interface Props {
  books: Book[]
}

export const FavoriteList: React.FC<Props> = ({ books }) => {
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)
  const { favorites, updateFavorites, availablesBooks } = useBook()

  const reorderFavorites = ({ fromIndex, toIndex }: { fromIndex: number, toIndex: number }) => {
    setDragOverIndex(null)

    const itemToDelete = favorites[fromIndex]
    const updatedFavorites = favorites
      .toSpliced(fromIndex, 1)
      .toSpliced(fromIndex < toIndex ? toIndex - 1 : toIndex, 0, itemToDelete)

    updateFavorites({ updatedFavorites })
  }

  const handleDropItemPosition = ({ fromIndex }: { fromIndex: number }) => {
    if (dragOverIndex === null) return
    reorderFavorites({ fromIndex, toIndex: dragOverIndex })
  }

  const addToFavorites = ({ bookId }: { bookId: string }) => {
    const foundedBook = availablesBooks.find(({ ISBN }) => ISBN === bookId)

    if (foundedBook == null) return

    const updatedFavorites = favorites.toSpliced(dragOverIndex ?? 0, 0, foundedBook)
    updateFavorites({ updatedFavorites })
    setDragOverIndex(null)
  }

  const handleMoveItemPosition = ({ position, index }: { position: number, index: number }) => {
    const fromIndex = index
    const toIndex = index + position

    reorderFavorites({ fromIndex, toIndex })
  }

  const currentDragOverItem = ({ index }: { index: number }) => {
    setDragOverIndex(index)
  }

  const handleDrop = (event: React.DragEvent<HTMLElement>) => {
    const bookId = event.dataTransfer.getData(DRAG_EVENTS.ADD_TO_FAVORITES)
    const fromIndex = event.dataTransfer.getData(DRAG_EVENTS.FROM_SORTED_INDEX)

    if (fromIndex !== '') {
      handleDropItemPosition({ fromIndex: +fromIndex })
    }

    if (bookId !== '') {
      addToFavorites({ bookId })
    }
  }

  if (books.length === 0) {
    return (
			<div className="flex flex-col justify-center items-center h-full gap-14">
				<img className="w-44" src={NotFoundImage} alt="not-found"></img>
				<h1 className="font-bold text-xl">Add some books</h1>
			</div>
    )
  }

  return (
		<ul
			className="flex flex-col gap-3 w-full pt-4 h-full"
			onDrop={handleDrop}
			onDragOver={event => { event.preventDefault() }}
		>
			{books.map((book, index) => (
				<FavoriteItem
					key={book.title}
					book={book}
					index={index}
					handleMoveItemPosition={handleMoveItemPosition}
					currentDragOverItem={currentDragOverItem}
					dragOverIndex={dragOverIndex}
				/>
			)
			)}
		</ul>
  )
}
