import { test, expect } from 'vitest'
import { BookList } from '../BookList'
import booksData from '../../data/books.json'

const MOCK_BOOK = booksData.library[0].book

test.only('get longer book', () => {
  const LIBRARY = [
    {
      book: {
        ...MOCK_BOOK,
        pages: 0
      }
    },
    {
      book: {
        ...MOCK_BOOK,
        pages: 1
      }
    }
  ]

  expect(BookList.longerBook(LIBRARY).pages).toBe(1)
})
