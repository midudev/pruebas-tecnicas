/* eslint-disable react/display-name */
import BookGallery from "../index"
import { render } from "@testing-library/react"

jest.mock('@components/BookGalleryWrapper', () => ({ children } : any) => <div>{children}</div>)
jest.mock('@components/Book', () => ({ children } : any) => <div>{children}</div>)

describe('BookGallery', () => {
  it('should render', () => {
    const { container } = render(
      <BookGallery
        books={[
          {
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
          },
        ]}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
