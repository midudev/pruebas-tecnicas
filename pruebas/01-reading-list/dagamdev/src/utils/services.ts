import books from './books.json'
import { LOCAL_KEYS } from './config'
import { Book } from './types'

export function getBooks() {
  return books.library.map(({book})=> book)
}

export function getBook(bookISBN: string) {
  return books.library.find(f=> f.book.ISBN == bookISBN)?.book
}

export const windowExist = typeof window != 'undefined'

export function getBooksByISBNs(ISBNs: string[]) {
  return getBooks().filter(f=> ISBNs.some((s: string)=> s == f.ISBN))
}

export function getReadingBooks() {
  const localBooksData = localStorage.getItem(LOCAL_KEYS.READING_BOOKS)
  const readingBooksISBNs: string[] = localBooksData ? JSON.parse(localBooksData) : undefined
  
  if(Array.isArray(readingBooksISBNs)) return getBooksByISBNs(readingBooksISBNs)
  
  return []
}

export function updateReadingBooks(booksISBNs: Book[]) {
  localStorage.setItem(LOCAL_KEYS.READING_BOOKS, JSON.stringify(booksISBNs.map(m=> m.ISBN)))
}