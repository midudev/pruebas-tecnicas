import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import ReadingListCard from '../inReadingList/ReadingListCard'

describe('ReadingListCard', () => {
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
  test('render card book in reading list', () => {
    render(<ReadingListCard book={bookMock} />)

    const title = screen.getByText(bookMock.title)
    const img = screen.getByRole('img').getAttribute('alt')

    expect(title).toBeDefined()
    expect(img).toEqual('Book Cover')
  })
})
