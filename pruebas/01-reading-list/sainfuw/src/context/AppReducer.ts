import { library } from "../api/books.json";
import { AppContextInitialStateType, IBook } from "../types";

type ActionTypes =
  | { type: 'SET_BOOKS' }
  | { type: 'ADD_TO_FAVORITES', payload: IBook }
  | { type: 'REMOVE_FROM_FAVORITES', payload: IBook }

export function AppReducer(
  state: AppContextInitialStateType,
  action: ActionTypes
): AppContextInitialStateType {

  if (action.type === 'SET_BOOKS') {
    return {
      ...state,
      books: library.map(item => item.book)
    }
  }

  if (action.type === 'ADD_TO_FAVORITES') {
    return {
      ...state,
      books: state.books.filter(book => book.title !== action.payload.title),
      favoriteBooks: [...state.favoriteBooks, action.payload]
    }
  }

  if (action.type === 'REMOVE_FROM_FAVORITES') {
    return {
      ...state,
      books: [...state.books, action.payload],
      favoriteBooks: state.favoriteBooks.filter(book => book.title !== action.payload.title)
    }
  }

  return state;
}