import { IBook } from '../types/book'

export function updateLocalStorage (readingList: IBook[]) {
  localStorage.setItem('readingList', JSON.stringify(readingList))
}
