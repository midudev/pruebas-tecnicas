import { IBook } from "../types";

type ActionTypes =
  | { type: 'SET_READ_LIST', payload: IBook[] }
  | { type: 'ADD_TO_READ_LIST', payload: IBook }
  | { type: 'REMOVE_FROM_READ_LIST', payload: IBook }

export function readListReducer(
  state: IBook[],
  action: ActionTypes
): IBook[] {
  if (action.type === 'SET_READ_LIST') {
    return action.payload
  }

  if (action.type === 'ADD_TO_READ_LIST') {
    return [...state, action.payload]
  }

  if (action.type === 'REMOVE_FROM_READ_LIST') {
    return state.filter(book => book.ISBN !== action.payload.ISBN)
  }

  return state;
}