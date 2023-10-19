import { cleanup, fireEvent, getByRole, queryAllByRole, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import { library as libraryTest } from './test/books.json'

/**
 * mock `getAllBooks` to have control of input data
 */
vi.mock('./services/books', async (importOriginal) => {
  const mod = await importOriginal()
  return {
    ...(mod as object),
    getAllBooks: vi.fn(async () => {
      return Promise.resolve(
        libraryTest.map(item => item.book)
      )
    })
  }
})

afterEach(() => {
  cleanup()
  // always clean the localStorage after each test
  window.localStorage.clear()
})

/**
 * Returns all filtered books
 */
function queryAllBooks () {
  const main = screen.getByRole('main')
  return queryAllByRole(main, 'article')
}

/**
 * Returns all books in reading list
 */
function queryAllBooksInReadingList () {
  const aside = screen.getByRole('complementary')
  return queryAllByRole(aside, 'article')
}

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('13 books are visible', async () => {
    await waitFor(() => {
      expect(queryAllBooks()).toHaveLength(13)
    })
  })

  it('0 books are in reading list', async () => {
    await waitFor(() => {
      expect(queryAllBooksInReadingList()).toHaveLength(0)
    })
  })

  it('5 books are visible when filter by `ciencia ficción`', async () => {
    await waitFor(() => {
      const main = screen.getByRole('main')
      const filterByButton = getByRole(main, 'button', { name: /ciencia ficción/i })
      fireEvent.click(filterByButton)
      expect(queryAllBooks()).toHaveLength(5)
    })
  })

  it('should add to reading list', () => {
    waitFor(() => {
      const someAddButton = getByRole(queryAllBooks()[0], 'button')
      fireEvent.click(someAddButton)
      expect(queryAllBooksInReadingList()).toHaveLength(1)
    })
  })

  it('should remove from reading list', async () => {
    await waitFor(() => {
      const someAddButton = getByRole(queryAllBooks()[0], 'button')
      fireEvent.click(someAddButton)
      expect(queryAllBooksInReadingList()).toHaveLength(1)

      const removeButton = getByRole(queryAllBooksInReadingList()[0], 'button')
      fireEvent.click(removeButton)
      expect(queryAllBooksInReadingList()).toHaveLength(0)
    })
  })
})
