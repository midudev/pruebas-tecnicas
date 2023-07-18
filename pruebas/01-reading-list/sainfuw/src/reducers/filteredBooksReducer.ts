import { IBook } from "../types";

type ActionTypes =
  | { type: 'SET_FILTERED_BOOKS', payload: IBook[] }

export function filteredBooksReducer(
  state: IBook[],
  action: ActionTypes
): IBook[] {
  if (action.type === 'SET_FILTERED_BOOKS') {
    return [...action.payload]
  }

  return state;
}