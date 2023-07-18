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
  switch (type) {
    case 'AddToReadingList': {
      const alreadyIn = readingList.includes(action.payload)
      if (alreadyIn) return state
      const newState = { ...state, readingList: [...readingList, payload] }
      localStorage.setItem('books', JSON.stringify(newState))
      return newState
    }
    case 'RemoveFromReadingList': {
      const withoutBook = readingList.filter((b) => b.ISBN !== payload.ISBN)
      const newState = { bookList: [...bookList], readingList: withoutBook }
      localStorage.setItem('books', JSON.stringify(newState))
      return newState
    }
  }
}
