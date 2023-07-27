import { BOOKS_URL, IS_EMPTY } from './../constants'
import { addLikeToBook } from '../utils/books'

export const getFromLocalStorage = () => {
  try {
    const books = window.localStorage.getItem('books')
    return books ? JSON.parse(books) : []
  } catch (e) {
    throw new Error('Unable to get the books from localStorage: ' + e.message)
  }
}

export const saveToLocalStorage = (books) => {
  try {
    window.localStorage.setItem('books', JSON.stringify(books))
  } catch (e) {
    throw new Error('Unable to save the books to localStorage: ' + e.message)
  }
}

export const getOrignalBooks = async () => {
  try {
    const response = await window.fetch(BOOKS_URL)
    const data = await response.json()
    return data
  } catch (e) {
    return Promise.reject(e)
  }
}

export const getBooks = async () => {
  try {
    const books = getFromLocalStorage()
    if (books.length === IS_EMPTY) {
      const { library } = await getOrignalBooks()
      const available = addLikeToBook(library)
      const books = {
        available,
        readingList: []
      }
      saveToLocalStorage(books)
      return books
    }
    return books
  } catch (e) {
    return Promise.reject(e)
  }
}
