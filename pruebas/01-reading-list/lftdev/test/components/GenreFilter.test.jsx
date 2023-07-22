import { afterEach, describe, it } from 'vitest'
import GenreFilter from '../../src/components/GenreFilter'
import { cleanup, render, screen } from '@testing-library/react'
import BooksJSON from '../books.json'

const genres = [...new Set(BooksJSON.library.map(bookObj => bookObj.book.genre))]
describe('GenreFilter', () => {
  // ⚠️ Unnecessary tests will be left as a comment in order to leave them open for review.
  afterEach(cleanup)
  it('should render correctly;', () => render(<GenreFilter />))
  it('should render a combobox;', () => {
    render(<GenreFilter />)
    screen.getByRole('combobox')
  })
  it('should display an option with the text: "Todos";', () => {
    render(<GenreFilter />)
    screen.getByText('Todos')
  })
  it('should display all genres given in props;', () => {
    render(<GenreFilter genres={genres} />)
    genres.forEach(genre => {
      screen.getByText(genre)
    })
  })
})
