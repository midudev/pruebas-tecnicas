import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { BookItem } from '..'
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

const mockAddFavorite = vi.fn()

vi.mock('../../hooks/useBook', () => ({
  useBook: () => ({
    addFavorite: mockAddFavorite
  })
}))

describe('BookItem Component Test', () => {
  it('should render the book', () => {
    const { container } = render(<BookItem book={book} />)

    expect(container).toBeTruthy()
  })

  it('should render the book details correctly', () => {
    render(<BookItem book={book} />)

    const titleElement = screen.getByText(book.title)
    expect(titleElement).toBeTruthy()

    const authorElement = screen.getByText(`${book.author.name} - ${book.year}`)
    expect(authorElement).toBeTruthy()

    const genreElement = screen.getByText(book.genre)
    expect(genreElement).toBeTruthy()

    const pagesElement = screen.getByText(`${book.pages} pages`)
    expect(pagesElement).toBeTruthy()
  })

  it('should call addFavorite from useBook when clicked the add button', () => {
    render(<BookItem book={book} />)

    const addButton = screen.getByRole('add-button')
    addButton.click()

    expect(mockAddFavorite).toHaveBeenCalledTimes(1)
    expect(mockAddFavorite).toHaveBeenCalledWith({ newFavorite: book })
  })

  // it('should speak the book synopsis when speak button is clicked', () => {
  //   window.speechSynthesis = {
  //     speak: vi.fn()
  //   } as any

  //   render(<BookItem book={book} />)

  //   fireEvent.click(screen.getByRole('speak-button'))

  //   expect(window.speechSynthesis.speak).toHaveBeenCalledWith(
  //     expect.objectContaining({ text: book.synopsis })
  //   )
  // })

  it('should set dataTransfer with correct value when dragging starts', () => {
    const setDataMock = vi.fn()
    const dragStartEvent = { dataTransfer: { setData: setDataMock } }

    render(<BookItem book={book} />)
    const listItemElement = screen.getByRole('listitem')

    fireEvent.dragStart(listItemElement, dragStartEvent)

    expect(setDataMock).toHaveBeenCalledWith(DRAG_EVENTS.ADD_TO_FAVORITES, book.ISBN)
  })
})
