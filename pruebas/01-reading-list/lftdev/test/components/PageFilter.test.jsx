import { afterEach, describe, expect, it } from 'vitest'
import PagesFilter from '../../src/components/PagesFilter'
import { cleanup, render, screen } from '@testing-library/react'
import BooksJSON from '../books.json'

describe('PagesFilter', () => {
  afterEach(cleanup)
  it('should render correctly;', () => render(<PagesFilter />))
  it('should render a slider input;', () => {
    render(<PagesFilter />)
    screen.getByRole('slider')
  })
  it('should set 0 as minimum value for slider;', () => {
    render(<PagesFilter />)
    const slider = screen.getByRole('slider')
    expect(parseInt(slider.getAttribute('min'))).toBe(0)
  })
  it('should set determine the maximum value for slider with given books pages number list;', () => {
    const booksPages = [...new Set(BooksJSON.library.map(bookObj => bookObj.book.pages))]
    render(<PagesFilter booksPages={booksPages} />)
    const slider = screen.getByRole('slider')
    expect(parseInt(slider.getAttribute('max'))).toBe(Math.max(...booksPages))
  })
})
