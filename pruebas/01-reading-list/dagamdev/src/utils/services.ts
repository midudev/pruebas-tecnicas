import books from './books.json'
import { LOCAL_KEYS } from './config'
import { Book, LocalKeys } from './types'

export function getBooks() {
  return books.library.map(({book})=> book)
}

export function getBook(bookISBN: string) {
  return books.library.find(f=> f.book.ISBN == bookISBN)?.book
}

export const windowExist = typeof window != 'undefined'

export function getBooksISBNs(localKey: LocalKeys) {
  if(typeof localStorage != 'undefined'){
    const localISBNsData = localStorage.getItem(localKey)
    return localISBNsData ? JSON.parse(localISBNsData) as string[] : []
  }

  return []
}

export function getBooksByISBNs(ISBNs: string[]) {
  return getBooks().filter(f=> ISBNs.some((s: string)=> s == f.ISBN))
}

function getBooksFromLocalStorage(localKey: LocalKeys) {
  const readingBooksISBNs = getBooksISBNs(localKey)
  
  if(Array.isArray(readingBooksISBNs)) return getBooksByISBNs(readingBooksISBNs)
  
  return []
}

export function getReadingBooks() {
  return getBooksFromLocalStorage(LOCAL_KEYS.READING_BOOKS)
}

export function getPriorityBooks() {
  return getBooksFromLocalStorage(LOCAL_KEYS.PRIORITY_BOOKS)
}

export function updateReadingBooks(booksISBNs: Book[]) {
  localStorage.setItem(LOCAL_KEYS.READING_BOOKS, JSON.stringify(booksISBNs.map(m=> m.ISBN)))
}