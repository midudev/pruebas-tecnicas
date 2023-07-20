import { type Book } from '../types'
import data from '../mocks/books.json'

const getAllBooks = (): Book[] => {
  const books = data.library
  return books.map(item => item.book)
}

const getInitialReadingList = (): Book[] => {
  try {
    const ls = window.localStorage.getItem('readingList')
    if (!ls) return []
    const readingList = JSON.parse(ls)
    return readingList || []
  } catch (error) {
    console.error('Error reading localStorage')
    return []
  }
}

const getInitialBooks = (readingList: Book[]) => {
  const books = getAllBooks()
  if (readingList.length === 0) return books

  const mapBooksByISBN = new Map()
  for (const book of readingList) mapBooksByISBN.set(book.ISBN, true)

  return books.map(book => {
    const { ISBN } = book
    if (mapBooksByISBN.get(ISBN)) return { ...book, isSelected: true }
    return book
  })
}

export const updateLocalStorage = (list: Book[]) => {
  try {
    window.localStorage.setItem('readingList', JSON.stringify(list))
  } catch (error) {
    console.error('Error saving localStorage')
  }
}

export const getSyncedFromLS = () => {
  const readingList = getInitialReadingList()
  const books = getInitialBooks(readingList)
  const readingListQuantity = readingList.length
  return {
    readingList,
    books,
    readingListQuantity
  }
}
