import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ListBook } from './ListBook'
import { ARIA_LABELS } from '../../constants/aria-labels'

const mockBook = {
  title: 'El camino de los reyes',
  pages: 1200,
  genre: 'Fantasía',
  cover: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91jOSMOea0L._SY425_.jpg',
  synopsis: 'En las Llanuras Quebradas se libra una guerra sin sentido. Kaladin ha sido sometido a la esclavitud, mientras diez ejércitos luchan por separado contra un solo enemigo.',
  year: 2010,
  ISBN: '978-8466657662',
  author: {
    name: 'Brandon Sanderson',
    otherBooks: [
      'El aliento de los dioses',
      'Elantris'
    ]
  }
}

describe('<ListBook />', () => {
  it('should render and display correct book information', () => {
    render(
        <ListBook
            title={mockBook.title}
            cover={mockBook.cover}
            ISBN={mockBook.ISBN}
        />
    )

    const bookTitle = screen.queryByText(mockBook.title)
    expect(bookTitle).not.toBeNull()

    const bookCover: HTMLImageElement = screen.getByRole('img', { name: ARIA_LABELS.BookCover })
    expect(bookCover.src).toBe(mockBook.cover)

    const removeButton = screen.queryByRole('button', { name: ARIA_LABELS.RemoveBookFromList })
    expect(removeButton).not.toBeNull()
  })
})
