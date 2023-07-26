import { create } from 'zustand'
import { Book, Library } from '../getBooks'
import { resetBook } from '../adapter/adapterBook'

export type DragOrigin = 'inReading' | 'outReading'
export type Count = {
  books?: number
  inReadingList: number
  outReadingList: number
}

interface BooksState {
  countState: Count
  outReadingList: Library[]
  inReadingList: Library[]
  dragState: { book: Library; origin: DragOrigin } | null
  setInitialState: ({
    outReadingList,
    inReadingList
  }: Pick<BooksState, 'inReadingList' | 'outReadingList'>) => void

  setCountState: () => void
  addInReadingList: (book: Book) => void
  removeInReadingList: (book: Book) => void
  setDragState: (value: { book: Book; origin: DragOrigin } | null) => void
}

export const useBooksStore = create<BooksState>((set) => ({
  countState: { books: 0, inReadingList: 0, outReadingList: 0 },
  outReadingList: [],
  inReadingList: [],
  dragState: null,
  setInitialState: ({ outReadingList, inReadingList }) =>
    set(() => ({
      outReadingList,
      inReadingList,
      countState: {
        books: inReadingList.length + outReadingList.length,
        inReadingList: inReadingList.length,
        outReadingList: outReadingList.length
      }
    })),

  setCountState: () =>
    set((state) => ({
      countState: {
        inReadingList: state.inReadingList.length,
        outReadingList: state.outReadingList.length
      }
    })),

  addInReadingList: (book) =>
    set(({ outReadingList, inReadingList, countState }) => {
      const newOutReading = outReadingList.filter(
        (u) => u.book.ISBN !== book.ISBN
      )
      const newInReading = [...inReadingList, resetBook(book)]
      return {
        outReadingList: newOutReading,
        inReadingList: newInReading,
        countState: {
          books: countState.books,
          outReadingList: newOutReading.length,
          inReadingList: newInReading.length
        }
      }
    }),

  removeInReadingList: (book) =>
    set(({ outReadingList, inReadingList, countState }) => {
      const newInReading = inReadingList.filter(
        (u) => u.book.ISBN !== book.ISBN
      )
      const newOutReading = [...outReadingList, resetBook(book)]

      return {
        inReadingList: newInReading,
        outReadingList: newOutReading,
        countState: {
          books: countState.books,
          inReadingList: newInReading.length,
          outReadingList: newOutReading.length
        }
      }
    }),

  setDragState: (value) =>
    set(() => ({
      dragState: value
        ? { book: resetBook(value.book), origin: value.origin }
        : null
    }))
}))
