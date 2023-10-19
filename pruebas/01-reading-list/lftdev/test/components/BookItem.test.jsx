import { afterEach, describe, expect, it } from 'vitest'
import BookItem from '../../src/components/BookItem'
import { cleanup, render, screen } from '@testing-library/react'
import BooksJSON from '../books.json'

// Example book
const book = BooksJSON.library[0].book
describe('BookItem', () => {
  afterEach(cleanup)
  it('should render correctly;', () => render(<BookItem book={book} />))
  it('should render an img;', () => {
    render(<BookItem book={book} />)
    screen.getByRole('img')
  })
  it('should set correct src for img;', () => {
    render(<BookItem book={book} />)
    const img = screen.getByRole('img')
    expect(img.getAttribute('src')).toBe('https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg')
  })
  it('should set correct alt for img;', () => {
    render(<BookItem book={book} />)
    screen.getByAltText('El Señor de los Anillos book cover')
  })
})
