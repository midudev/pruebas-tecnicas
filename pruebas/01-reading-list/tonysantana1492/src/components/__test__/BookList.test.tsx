import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { BookList } from '../BookList'
import { type Book } from '../../types'

const books: Book[] = [
  {
    title: 'El Señor de los Anillos',
    pages: 1200,
    genre: 'Fantasía',
    cover:
              'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
    synopsis:
              'Una aventura épica en un mundo de fantasía llamado la Tierra Media.',
    year: 1954,
    ISBN: '978-0618640157',
    author: {
      name: 'J.R.R. Tolkien',
      otherBooks: ['El Hobbit', 'El Silmarillion']
    }

  }
]

vi.mock('../NotFound', () => ({
  NotFound: () => <h1>Not Found</h1>
}))

describe('BookList Component Test', () => {
  it('renders the list of books when available', () => {
    render(<BookList books={books} />)

    const bookElements = screen.getAllByRole('listitem')
    expect(bookElements.length).toBe(books.length)
  })

  it('renders the NotFound component when no books are available', () => {
    const books: Book[] = []
    render(<BookList books={books} />)

    const notFoundElement = screen.getByText('Not Found')
    expect(notFoundElement).toBeTruthy()
  })
})
