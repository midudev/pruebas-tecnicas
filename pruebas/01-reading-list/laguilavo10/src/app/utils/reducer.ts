import type { ActionType, BooksContext } from '../context/books'
import type { Book } from '../types'

export interface ActionCRUD {
  type: ActionType
  payload: Book
}
export interface ActionFilter {
  type: 'FilterByGenre' | 'FilterByText'
  payload: string
}

export type Action = ActionCRUD | ActionFilter

export const reducer = (state: BooksContext, action: Action): BooksContext => {
  const { payload, type } = action
  const { bookList, readingList }: BooksContext = JSON.parse(
    localStorage.getItem('books') as string
  )
  const updateList = (array: Book[]) => {
    if (typeof payload === 'string') return []
    return array.filter((b) => b.ISBN !== payload?.ISBN)
  }

  switch (type) {
    case 'AddToReadingList': {
      const alreadyIn = readingList.some((book) => book.ISBN === payload.ISBN)
      if (alreadyIn) return state
      const newState = {
        bookList: updateList(bookList),
        readingList: [...readingList, payload]
      }
      localStorage.setItem('books', JSON.stringify(newState))
      return newState
    }
    case 'RemoveFromReadingList': {
      const newState = {
        bookList: [...bookList, payload],
        readingList: updateList(readingList)
      }
      localStorage.setItem('books', JSON.stringify(newState))
      return newState
    }
    case 'FilterByGenre': {
      if (payload === 'Todos') return { bookList, readingList }
      const filteredBookList = bookList.filter((book) => book.genre === payload)
      const filteredReadingList = readingList.filter(
        (book) => book.genre === payload
      )
      return {
        bookList: filteredBookList,
        readingList: filteredReadingList
      }
    }
    case 'FilterByText': {
      if (payload === '') return { bookList, readingList }
      const FilterByText = (array: Book[]) => {
        return array.filter((book) =>
          book.title.toLocaleLowerCase().includes(payload.toLocaleLowerCase())
        )
      }
      const filteredBookList = FilterByText(bookList)
      const filteredReadingList = FilterByText(readingList)

      return {
        bookList: filteredBookList,
        readingList: filteredReadingList
      }
    }
  }
}
