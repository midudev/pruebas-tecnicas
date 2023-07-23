import { render, screen } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'

import { Header } from '../Header'
import { type Book } from '../../types'

const book: Book[] = [{
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
}]

vi.mock('../hooks/useBook', () => ({
  useBook: vi.fn().mockReturnValue({
    favorites: book
  })
}))

const mockOnOpen = vi.fn()

vi.mock('../../store/menu', () => ({
  useMenu: () => ({
    onOpen: mockOnOpen
  })
}))

describe('Header Component Test', () => {
  it('should render the header with correct title and badge value', () => {
    render(<Header />)

    const titleElement = screen.getByText('Available Books')
    expect(titleElement).toBeTruthy()

    const badgeElement = screen.findByText('1')
    expect(badgeElement).toBeTruthy()
  })

  it('should call the onOpen function when button is clicked', async () => {
    render(<Header />)
    const buttonElement = await screen.findByRole('open-button')
    buttonElement.click()
    expect(mockOnOpen).toHaveBeenCalledTimes(1)
  })
})
