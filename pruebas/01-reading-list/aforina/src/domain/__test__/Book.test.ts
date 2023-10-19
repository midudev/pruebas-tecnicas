import { test, expect } from 'vitest'
import { Book } from '../Book'
import booksData from '../../data/books.json'

const MOCK_BOOK = booksData.library[0].book

test('get number of pages', () => {
  const RANDOM_NUMBER_OF_PAGES = 30
  const BOOK_WITH_A_RANDOM_NUMBER_OF_PAGES = {
    ...MOCK_BOOK,
    pages: RANDOM_NUMBER_OF_PAGES
  }

  expect(Book.pages(BOOK_WITH_A_RANDOM_NUMBER_OF_PAGES)).toBe(
    RANDOM_NUMBER_OF_PAGES
  )

  const INVALID_NUMBER_OF_PAGES = NaN
  const BOOK_WITH_A_INVALID_NUMBER_OF_PAGES = {
    ...MOCK_BOOK,
    pages: INVALID_NUMBER_OF_PAGES
  }

  expect(Book.pages(BOOK_WITH_A_INVALID_NUMBER_OF_PAGES)).not.toBe(
    INVALID_NUMBER_OF_PAGES
  )

  expect(Book.pages(BOOK_WITH_A_INVALID_NUMBER_OF_PAGES)).toBe(0)
})
