import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import books from './mocks/books.json'
import { App } from './App'
import { GENRES_ALLOWED } from './constants'

const filteredBooksByPages = books.library.filter(
  (book) => book.book.pages <= 100
)

const filteredBooksByGenre = books.library.filter(
  (book) => book.book.genre === GENRES_ALLOWED.TERROR
)

describe('App Component Test', () => {
  it('renders header', async () => {
    render(<App />)

    const headerTitleElement = await screen.findByText(/Available Books/i)
    expect(headerTitleElement).toBeTruthy()
  })

  it('should filter by maximun pages', async () => {
    render(<App />)

    const pageFilter = await screen.findByRole('filter-page')
    fireEvent.change(pageFilter, { target: { value: 100 } })

    const booksFound = await screen.findAllByRole('add-button')
    expect(booksFound).toHaveLength(filteredBooksByPages.length)
  })

  it('should filter by title', async () => {
    render(<App />)

    const titleFilter = await screen.findByPlaceholderText(/Search book titles.../i)

    await waitFor(async () => {
      fireEvent.change(titleFilter, { target: { value: 'anillos' } })
      await new Promise((resolve) => setTimeout(resolve, 500)) // because the useDebounce
    })

    const books = await screen.findAllByRole('add-button')
    expect(books.length).toBe(1)
  })

  it('should filter by genre', async () => {
    render(<App />)

    const genreFilter = await screen.findByRole('Terror')
    fireEvent.click(genreFilter)

    const books = await screen.findAllByRole('add-button')
    expect(books.length).toBe(filteredBooksByGenre.length)
  })

  it('should add book to localStore', async () => {
    vi.spyOn(Storage.prototype, 'setItem')
    render(<App />)

    const addButton = await screen.findAllByRole('add-button')
    fireEvent.click(addButton[0])

    expect(localStorage.setItem).toHaveBeenCalled()
  })
})
