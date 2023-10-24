import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react'
import { afterEach, describe, it, expect, beforeEach } from 'vitest'
import { getBooks } from '../src/services/books'
import { useStore } from '../src/state'
import App from '../src/App'

describe('Reading List App', () => {
  localStorage.setItem('tour', true) // to avoid the tour with Driver.js
  beforeEach(() => render(<App />))
  afterEach(cleanup)
  it('should render the controls', () => {
    expect(screen.getByText('Mostrando 0 libros de 0 disponibles')).toBeDefined()
  })
  it('should render the book list', () => {
    expect(screen.getByText('No hay libros disponibles')).toBeDefined()
  })
  it('should render the reading list with 0 elements', () => {
    const counter = screen.getByRole('count')
    expect(counter.textContent).toBe('0')
  })
  it('should get the books', async () => {
    const { available } = await getBooks()
    expect(available.length).toBeGreaterThan(0)
  })
  it('should avaliable list have 13 elements', async () => {
    const { books } = useStore.getState()
    expect(books.length).toBe(13)
  })
  it('should reading list have 0 elements', () => {
    const { readingList } = useStore.getState()
    expect(readingList.length).toBe(0)
  })
  it('should filter available books by any text', async () => {
    const input = screen.getByPlaceholderText('Buscar... 🔎')

    fireEvent.change(input, { target: { value: 'harry' } })

    await waitFor(() => {
      const { books } = useStore.getState()
      expect(books.length).toBe(1)
    })
  })
  it('should filter available books by pages', async () => {
    const range = screen.getByTestId('pages')

    fireEvent.change(range, { target: { value: 400 } })

    await waitFor(() => {
      const { books } = useStore.getState()
      expect(books.length).toBe(7)
    })
  })
  it('should filter available books by genre', async () => {
    const select = screen.getByRole('combobox')

    fireEvent.change(select, { target: { value: 'Fantasía' } })

    await waitFor(() => {
      const { books } = useStore.getState()
      expect(books.length).toBe(3)
    })
  })
  it('should add a book to the reading list with double click', async () => {
    const book = screen.getByTestId('978-0618640157')
    fireEvent.doubleClick(book)

    await waitFor(() => {
      const { readingList } = useStore.getState()
      expect(readingList.length).toBe(1)
    })
  })
  it('should remove a book from the reading list with double click', async () => {
    const book = screen.getByTestId('978-0618640157')
    fireEvent.doubleClick(book)

    await waitFor(() => {
      const { readingList } = useStore.getState()
      expect(readingList.length).toBe(0)
    })
  })
})
