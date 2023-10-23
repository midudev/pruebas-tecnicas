import { typeReducerBook } from "../constant/typeReducerBook";
import { BookInterface, BookPending } from "../types";

type BookAction = {
  type: string
  payload: BookInterface | BookInterface[] | BookInterface['ISBN'] | BookPending
}

type stateBook = {
  booksList: BookInterface[]
  loading: boolean
  error: boolean
  bookPendingList: BookPending[]
}

const initialStateBook: stateBook = {
  booksList: [],
  loading: false,
  error: false,
  bookPendingList: []
}

function BookReducer(state: stateBook, action: BookAction) {
  switch (action.type) {
    case typeReducerBook.LIST_BOOK:
      const booksList = action.payload as BookInterface[]
      return {
        ...state,
        loading: false,
        error: false,
        booksList,
      }
    
    case typeReducerBook.ERROR_BOOK:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case typeReducerBook.LOADING_BOOK:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case typeReducerBook.ADD_BOOK_PENDING:
      const bookPending = action.payload as BookPending

      if (state.bookPendingList) {
        return {
          ...state,
          bookPendingList: [...state.bookPendingList, bookPending]
        }
      }

      return state

    case typeReducerBook.REMOVE_BOOK_PENDING:
      const ISBN = action.payload as BookInterface['ISBN']

      if (state.bookPendingList) {
        return {
          ...state,
          bookPendingList: state.bookPendingList.filter(book => book.ISBN !== ISBN)
        }
      }

      return state

    case typeReducerBook.LIST_BOOK_PENDING:
      const bookPendingList = action.payload as BookPending[]
      return {
        ...state,
        bookPendingList,
      }
      
    default:
      return state;
  }
}

export {
  BookReducer,
  initialStateBook
}
