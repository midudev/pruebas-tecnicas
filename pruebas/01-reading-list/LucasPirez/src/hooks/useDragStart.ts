import { DragOrigin, useBooksStore } from '../store/booksStore'
import { Book } from '../getBooks'

export const useDragStart = (origin: DragOrigin) => {
  const setDragState = useBooksStore((state) => state.setDragState)

  const handleDragStart = (book: Book) => {
    setDragState({ book: book, origin })
  }

  return {
    handleDragStart
  }
}
