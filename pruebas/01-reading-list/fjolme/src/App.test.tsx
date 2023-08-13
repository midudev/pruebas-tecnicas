import { cleanup, fireEvent, getByRole, queryAllByRole, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import { library as libraryTest } from './test/books.json'

/**
 * mock `getAllBooks` to have control of input data
 */
vi.mock('./services/books', async (importOriginal) => {
  const mod = await importOriginal()
  return {
    ...(mod as object),
    getAllBooks: vi.fn(() => {
      return libraryTest.map(item => item.book)
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
  it('13 books are visible', () => {
    render(<App />)
    expect(queryAllBooks()).toHaveLength(13)
  })

  it('0 books are in reading list', () => {
    render(<App />)
    expect(queryAllBooksInReadingList()).toHaveLength(0)
  })

  it('5 books are visible when filter by `ciencia ficción`', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const filterButton = getByRole(main, 'button', { name: /ciencia ficción/i })
    fireEvent.click(filterButton)
    expect(queryAllBooks()).toHaveLength(5)
  })

  it('should add to reading list', () => {
    render(<App />)
    const firstAddButton = getByRole(queryAllBooks()[0], 'button')
    fireEvent.click(firstAddButton)
    expect(queryAllBooksInReadingList()).toHaveLength(1)
  })

  it('should remove from reading list', () => {
    render(<App />)
    const firstAddButton = getByRole(queryAllBooks()[0], 'button')
    fireEvent.click(firstAddButton)
    expect(queryAllBooksInReadingList()).toHaveLength(1)

    const removeButton = getByRole(queryAllBooksInReadingList()[0], 'button')
    fireEvent.click(removeButton)
    expect(queryAllBooksInReadingList()).toHaveLength(0)
  })
})
