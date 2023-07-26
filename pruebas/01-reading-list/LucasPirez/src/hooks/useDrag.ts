import { DragEvent, useState } from 'react'
import { DragOrigin, useBooksStore } from '../store/booksStore'
import {
  deleteBookStorageReadingList,
  setStorageReadingList
} from '../localStorage/readingList'

export const useDrag = (container: DragOrigin) => {
  const [drag, setDrag] = useState(false)

  const setDragState = useBooksStore((state) => state.setDragState)
  const dragState = useBooksStore((state) => state.dragState)
  const addInReadingList = useBooksStore((state) => state.addInReadingList)

  const removeInReadingList = useBooksStore(
    (state) => state.removeInReadingList
  )

  function handleDrop(event: DragEvent<HTMLElement>) {
    setDrag(false)

    if (dragState && dragState?.origin !== container) {
      if (dragState?.origin === 'inReading') {
        removeInReadingList(dragState.book.book)
        deleteBookStorageReadingList(dragState.book.book.ISBN)
      } else {
        addInReadingList(dragState.book.book)
        setStorageReadingList(dragState.book.book.ISBN)
      }
    }

    setDragState(null)
    event.preventDefault()
  }

  function handleDragOver(event: DragEvent<HTMLElement>) {
    event.preventDefault()
    setDrag(true)
  }

  function handleDragLeave(event: DragEvent<HTMLElement>) {
    event.preventDefault()
    setDrag(false)
  }

  return {
    handleDrop,
    handleDragOver,
    handleDragLeave,
    drag
  }
}
