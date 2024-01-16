import { describe, expect, it, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BUTTON_LABELS } from '../../constants/DOM-text'
import { AvailableBook } from './AvailableBook'
import { ARIA_LABELS } from '../../constants/aria-labels'
import userEvent from '@testing-library/user-event'
import { Genre } from '../../constants/genres'

const mockBook = {
  title: 'El camino de los reyes',
  pages: 1200,
  genre: Genre.Fantasy,
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

describe('<AvailableBook />', () => {
  it('should render and display correct book information', () => {
    render(<AvailableBook book={mockBook} />)

    const bookCover = screen.getByRole('img', { name: ARIA_LABELS.BookCover })
    expect(bookCover).toBeDefined()

    const bookTitle = screen.getByText(mockBook.title)
    expect(bookTitle).toBeDefined()

    const bookAuthor = screen.getByText(mockBook.author.name)
    expect(bookAuthor).toBeDefined()

    const bookGenre = screen.getByText(mockBook.genre)
    expect(bookGenre).toBeDefined()

    const bookPagesElement = screen.getByText(/\d+/)
    const pagesCount = bookPagesElement.innerHTML.match(/\d+/)
    if (pagesCount != null) {
      expect(Number(pagesCount)).toBe(mockBook.pages)
    }

    const bookSynopsis = screen.getByText(mockBook.synopsis)
    expect(bookSynopsis).toBeDefined()
  })

  test('if add/remove buttons are rendered properly and with correct text when clicked', async () => {
    const user = userEvent.setup()

    let addToListButton = screen.queryByRole('button', { name: ARIA_LABELS.AddBookToList })
    let removeFromListButton = screen.queryByRole('button', { name: ARIA_LABELS.RemoveBookFromList })

    expect(addToListButton?.innerHTML).toBe(BUTTON_LABELS.AddBookToList)

    expect(addToListButton).not.toBeNull()
    expect(removeFromListButton).toBeNull()

    if (addToListButton != null) {
      await user.click(addToListButton)
    }

    addToListButton = screen.queryByRole('button', { name: ARIA_LABELS.AddBookToList })
    removeFromListButton = screen.queryByRole('button', { name: ARIA_LABELS.RemoveBookFromList })

    expect(removeFromListButton?.innerHTML).toBe(BUTTON_LABELS.RemoveBookFromList)

    expect(addToListButton).toBeNull()
    expect(removeFromListButton).not.toBeNull()

    if (removeFromListButton != null) {
      await user.click(removeFromListButton)
    }

    addToListButton = screen.queryByRole('button', { name: ARIA_LABELS.AddBookToList })
    removeFromListButton = screen.queryByRole('button', { name: ARIA_LABELS.RemoveBookFromList })

    expect(addToListButton).not.toBeNull()
    expect(removeFromListButton).toBeNull()
  })
})
