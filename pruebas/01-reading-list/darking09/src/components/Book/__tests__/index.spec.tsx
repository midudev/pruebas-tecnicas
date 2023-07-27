import Book from '../index'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'


// eslint-disable-next-line react/display-name
jest.mock('next/image', () => ({src, ...props} : any) => <div>{src}</div>)
jest.mock('../useBooks', () => () => ({
  setLoading: jest.fn(),
  classNameString: 'classNameString',
}))

describe('Book', () => {
  it('should render', () => {
    const { container } = render(
      <Book
        book={{
          id: 1,
          pages: 1,
          genre_id: 1,
          author_id: {
            name: 'name',
            otherBooks: [],
          },
          synopsis: 'synopsis',
          year: 1,
          ISBN: 'ISBN',
          is_available: true,
          title: 'title',
          cover: 'cover',
          created_at: new Date(),
        }}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render a book with a cover', () => {
    render(
      <Book
        book={{
          id: 1,
          pages: 1,
          genre_id: 1,
          author_id: {
            name: 'name',
            otherBooks: [],
          },
          synopsis: 'synopsis',
          year: 1,
          ISBN: 'ISBN',
          is_available: true,
          title: 'title',
          cover: 'cover',
          created_at: new Date(),
        }}
      />
    )

    const element = screen.getByText(/cover/)
    expect(element).toBeInTheDocument()
  })
})
