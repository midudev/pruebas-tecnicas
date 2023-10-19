import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { FavoriteItem } from '..'
import { DRAG_EVENTS } from '../../constants'

const book = {
  title: 'El Señor de los Anillos',
  pages: 1200,
  genre: 'Fantasía',
  cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
  synopsis: 'Una aventura épica en un mundo de fantasía llamado la Tierra Media.',
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

  it('should call removeFromFavorites from useBook when clicked the remove button', () => {
    render(
      <FavoriteItem
          book= {book}
          index = {1}
          handleMoveItemPosition = {handleMoveItemPosition}
          currentDragOverItem = { currentDragOverItem }
          dragOverIndex = { 1 }
      />)

    const removeButton = screen.getByRole('remove-button')
    expect(removeButton).toBeTruthy()

    removeButton.click()
    expect(mockRemoveFromFavorites).toHaveBeenCalledWith({ bookId: book.ISBN })
  })

  it('should set dataTransfer with correct value when dragging starts', () => {
    const setDataMock = vi.fn()
    const dragStartEvent = { dataTransfer: { setData: setDataMock } }

    render(<FavoriteItem
      book= {book}
      index = {1}
      handleMoveItemPosition = {handleMoveItemPosition}
      currentDragOverItem = { currentDragOverItem }
      dragOverIndex = { 1 }
    />)
    const listItemElement = screen.getByRole('listitem')

    fireEvent.dragStart(listItemElement, dragStartEvent)

    expect(setDataMock).toHaveBeenCalledWith(DRAG_EVENTS.REMOVE_FROM_FAVORITES, book.ISBN)
    expect(setDataMock).toHaveBeenCalledWith(DRAG_EVENTS.FROM_SORTED_INDEX, String(1))
  })

  it('should call currentDragOverItem when dragging end', () => {
    const mockCurrentDragOverItem = vi.fn()

    render(<FavoriteItem
      book= {book}
      index = {1}
      handleMoveItemPosition = {handleMoveItemPosition}
      currentDragOverItem = { mockCurrentDragOverItem }
      dragOverIndex = { 1 }
    />)

    const listItemElement = screen.getByRole('listitem')

    fireEvent.dragEnter(listItemElement)

    expect(mockCurrentDragOverItem).toHaveBeenCalledTimes(1)
    expect(mockCurrentDragOverItem).toHaveBeenCalledWith({ index: 1 })
  })
})
