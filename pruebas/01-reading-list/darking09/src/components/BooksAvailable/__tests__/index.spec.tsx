import BooksAvailable from '../index'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('BooksAvailable', () => {
  it('should render', () => {
    const { container } = render(
      <BooksAvailable
        numberOfBooks={{
          numberOfAvailableBooks: 1,
          numberOfBooksInReadingList: 1,
        }}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render a book with a cover', () => {
    render(
      <BooksAvailable
        numberOfBooks={{
          numberOfAvailableBooks: 1,
          numberOfBooksInReadingList: 1,
        }}
      />
    )

    const element = screen.getByText(/1 Libro disponible:/)
    expect(element).toBeInTheDocument()
  })
})
