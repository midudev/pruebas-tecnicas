import { AppContextInitialStateType, IBook } from "../types";

type ActionTypes =
  | { type: 'SET_BOOKS', payload: IBook[] }
  | { type: 'SET_READ_LIST', payload: IBook[] }
  | { type: 'ADD_TO_READ_LIST', payload: IBook }
  | { type: 'REMOVE_FROM_READ_LIST', payload: IBook }

export function appReducer(
  state: AppContextInitialStateType,
  action: ActionTypes
): AppContextInitialStateType {
  if (action.type === 'SET_BOOKS') {
    return {
      ...state,
      books: action.payload
    }
  }

  if (action.type === 'SET_READ_LIST') {
    return {
      ...state,
      readList: action.payload
    }
  }

  if (action.type === 'ADD_TO_READ_LIST') {
    return {
      ...state,
      books: state.books.filter(book => book.title !== action.payload.title),
      readList: [action.payload, ...state.readList]
    }
  }

  if (action.type === 'REMOVE_FROM_READ_LIST') {
    return {
      ...state,
      books: [...state.books, action.payload],
      readList: state.readList.filter(book => book.title !== action.payload.title)
    }
  }

  return state;
}