import { ActionType, BooksContext } from '../context/books'
import { Book } from '../types'

export interface Action {
  type: ActionType
  payload: Book
}

export const reducer = (state: BooksContext, action: Action) => {
  const { payload, type } = action
  const { bookList, readingList }: BooksContext = JSON.parse(
    localStorage.getItem('books') as string
  )
  const updateList = (array: Book[]) => {
    return array.filter((b) => b.ISBN !== payload.ISBN)
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
  }
}
