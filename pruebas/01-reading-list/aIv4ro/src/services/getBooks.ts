import { IBook } from '../types/book'
import { books } from './data'

export function getBooks (): IBook[] {
  return books
}
