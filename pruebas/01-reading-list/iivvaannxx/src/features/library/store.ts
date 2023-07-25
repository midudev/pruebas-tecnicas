import { atom } from 'nanostores'

/** @brief The information about the book currently being dragged (ISBN). */
export const bookDragTarget = atom<string | null>(null)

/** @brief Sets the book currently being dragged. */
export function setDragBook (isbn: string | null): void {

  bookDragTarget.set(isbn)
}
