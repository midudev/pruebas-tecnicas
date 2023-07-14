import { IBook } from '../types/book'

export function updateLocalStorage (readingList: IBook[]) {
  localStorage.setItem('readingList', JSON.stringify(readingList))
}

export function getLocalStorageReadingList () {
  const readingListString = localStorage.getItem('readingList')
  if (readingListString == null) return []
  const json = JSON.parse(readingListString) as IBook[]
  return json
}
