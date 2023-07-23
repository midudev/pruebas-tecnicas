import { render, screen, fireEvent } from '@testing-library/react'
import { vi, describe, expect, it } from 'vitest'

import { Favorites } from '../Favorites'
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

vi.mock('../FavoriteList', () => {
  return {
    FavoriteList: () => <h1>FavoriteList</h1>
  }
})

vi.mock('../../hooks/useBook', () => ({
  useBook: () => ({
    favorites: books
  })
}))

const mockOnClose = vi.fn()

vi.mock('../../store/menu', () => ({
  useMenu: () => ({
    isOpen: true,
    onClose: mockOnClose
  })
}))

describe('Favorites Component Test', () => {
  it('should renders favorite books count correctly', () => {
    render(<Favorites />)
    const favoriteCount = screen.getByText('1')
    expect(favoriteCount).toBeTruthy()

    const favoriteListElement = screen.getByText('FavoriteList')
    expect(favoriteListElement).toBeTruthy()
  })

  it('should calls onClose when menu is closed', () => {
    render(<Favorites />)

    const closeButton = screen.getByRole('open-side-menu')
    fireEvent.click(closeButton)

    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })
})
