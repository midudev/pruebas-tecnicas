import { BookType, SaveToLocalStorageParams } from '../types/types'

export const storage = {
  books: '__books__',
  readingList: '__reading_list__'
}
const saveToLocalStorage = ({ books, readingList }: SaveToLocalStorageParams) => {
  localStorage.setItem(storage.books, JSON.stringify(books))
  localStorage.setItem(storage.readingList, JSON.stringify(readingList))
}

const getBooksFromLocalStorage: BookType[] = JSON.parse(localStorage.getItem(storage.books) ?? '[]')

const getReadingListFromLocalStorage: BookType[] = JSON.parse(localStorage.getItem(storage.readingList) ?? '[]')

export {
  saveToLocalStorage,
  getBooksFromLocalStorage,
  getReadingListFromLocalStorage
}
