import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { FavoriteItem } from '..'

const book = {
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

const mockRemoveFromFavorites = vi.fn()
const favorites = [book]

vi.mock('../../hooks/useBook', () => ({
  useBook: () => ({
    removeFromFavorites: mockRemoveFromFavorites,
    favorites
  })
}))

const handleMoveItemPosition = (_: { position: number, index: number }) => {}
const currentDragOverItem = (_: { index: number }) => {}

describe('FavoriteItem Component Test', () => {
  it('should render the book', () => {
    const { container } = render(
      <FavoriteItem
        book= {book}
        index = {1}
        handleMoveItemPosition = {handleMoveItemPosition}
        currentDragOverItem = { currentDragOverItem }
        dragOverIndex = { 1 }
      />)

    expect(container).toBeTruthy()
  })

  it('should have appear in the document', () => {
    render(
      <FavoriteItem
          book= {book}
          index = {1}
          handleMoveItemPosition = {handleMoveItemPosition}
          currentDragOverItem = { currentDragOverItem }
          dragOverIndex = { 1 }
      />)
    expect(screen.findByText(book.title)).toBeTruthy()
  })

  it('should call removeFromFavorites from useBook when clicked the remove button', async () => {
    render(
      <FavoriteItem
          book= {book}
          index = {1}
          handleMoveItemPosition = {handleMoveItemPosition}
          currentDragOverItem = { currentDragOverItem }
          dragOverIndex = { 1 }
      />)

    const removeButton = await screen.findByRole('remove-button')
    expect(removeButton).toBeTruthy()

    removeButton.click()
    expect(mockRemoveFromFavorites).toHaveBeenCalledWith({ bookId: book.ISBN })
  })
})
