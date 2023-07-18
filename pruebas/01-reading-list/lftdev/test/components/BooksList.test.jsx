import { afterEach, describe, it } from 'vitest'
import BooksList from '../../src/components/BooksList'
import { cleanup, render, screen } from '@testing-library/react'
import BooksJSON from '../books.json'

// Example book
const library = BooksJSON.library.map(bookObj => bookObj.book)
describe('BooksList', () => {
  // ⚠️ Unnecessary tests will be left as a comment in order to leave them open for review.
  afterEach(cleanup)
  it('should render correctly;', () => render(<BooksList library={library} />))
  it('should render an ul;', () => {
    render(<BooksList library={library} />)
    screen.getByRole('list')
  })
  it('should render li as ul children;', () => {
    render(<BooksList library={library} />)
    screen.getAllByRole('listitem')
  })
})
