import booksData from '../services/books.json'
import type { Library } from '../types/types.d.ts'

const books: Library = booksData as Library

export function getAllBook () {
  return books
}
