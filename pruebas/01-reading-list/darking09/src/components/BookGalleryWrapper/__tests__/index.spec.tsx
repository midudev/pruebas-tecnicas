import BookGalleryWrapper from "..";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

jest.mock('@components/BookGalleryWrapper/useBookGalleryWrapper', () => () => ({
  isAvailable: true,
  onClick: jest.fn(),
}))

describe('BookGalleryWrapper', () => {
  it('should render', () => {
    const { container } = render(
      <BookGalleryWrapper
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
      >
        <div>children</div>
      </BookGalleryWrapper>
    )
    expect(container).toMatchSnapshot()
  })

  it('should render a book with a cover', () => {
    render(
      <BookGalleryWrapper
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
      >
        <div>children</div>
      </BookGalleryWrapper>
    )

    const element = screen.getByText(/children/)
    expect(element).toBeInTheDocument()
  })
})
