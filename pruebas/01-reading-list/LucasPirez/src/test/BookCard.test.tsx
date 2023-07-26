import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import BookCard from '../outReadingList/BookCard'

describe('<BookCard />', () => {
  const bookMock = {
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

  test('render the card', () => {
    render(<BookCard book={bookMock} inReadingList={true} />)

    const title = screen.getByText('El Señor de los Anillos')
    const genre = screen.getByText('Fantasía')
    const author = screen.getByText('J.R.R. Tolkien')
    const pages = screen.getByText('1200')

    expect(title).toBeDefined()
    expect(genre).toBeDefined()
    expect(author).toBeDefined()
    expect(pages).toBeDefined()
  })

  test('execute fire event on synopsis', () => {
    render(<BookCard book={bookMock} inReadingList={true} />)

    const synopsis = screen.getByText('Synopsis')

    fireEvent.mouseOver(synopsis)

    const synop = screen.getByText(bookMock.synopsis)
    expect(synop).toBeDefined()
  })
})
