import { afterEach, beforeAll, describe, expect, it, test } from 'vitest'
import { render, screen, act, cleanup, within, fireEvent, renderHook, waitFor } from '@testing-library/react'
import { RESULT_MESSAGES, TEXT_CONTENT } from '../../constants/DOM-text'
import { AvailableBooksList } from './AvailableBooksList'
import { ARIA_LABELS } from '../../constants/aria-labels'
import userEvent from '@testing-library/user-event'
import { Genre } from '../../constants/genres'
import { useFetchBooks } from '../../hooks/useFetchBooks'
import { Globals } from '@react-spring/web'

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

const pageQuantityPattern = new RegExp(`${TEXT_CONTENT.PagesAbbreviation}`)

describe('<AvailableBooksList />', () => {
  afterEach(cleanup)

  beforeAll(() => {
    Globals.assign({
      skipAnimation: true
    })
  })

  it('should render correct loading message', () => {
    render(<AvailableBooksList />)

    const loadingMessage = screen.queryByText(RESULT_MESSAGES.LoadingBooks)
    expect(loadingMessage).not.toBeNull()
  })

  test('if books are searched properly by title, author or ISBN', async () => {
    const user = userEvent.setup()

    await act(async () => {
      render(<AvailableBooksList />)
    })

    renderHook(() => { useFetchBooks() })

    const searchBar: HTMLInputElement = screen.getByRole('searchbox', { name: ARIA_LABELS.SearchInput })
    const searchButton = screen.getByRole('button', { name: ARIA_LABELS.SearchButton })

    await user.clear(searchBar)
    await user.type(searchBar, 'la')

    expect(searchBar.value).toBe('la')

    await user.click(searchButton)

    let searchResults = screen.getAllByRole('article', { name: ARIA_LABELS.AvailableBookCard })

    await waitFor(() => {
      expect(searchResults).toHaveLength(6)
    })

    searchResults.forEach((book) => {
      const title = within(book).getByRole('heading', { name: ARIA_LABELS.BookTitle })
      const author = within(book).getByRole('heading', { name: ARIA_LABELS.BookAuthor })

      const isTextIncluded = title.innerHTML.includes('la') || author.innerHTML.includes('la')

      expect(isTextIncluded).toBeTruthy()
    })

    await user.clear(searchBar)
    await user.type(searchBar, mockBook.ISBN)
    await user.click(searchButton)

    searchResults = screen.getAllByRole('article', { name: ARIA_LABELS.AvailableBookCard })

    searchResults.forEach(book => {
      const title = within(book).queryByText(mockBook.title)
      expect(title).not.toBeNull()
    })

    await user.clear(searchBar)
    await user.click(searchButton)
  })

  test('if books are filtered properly by pages', async () => {
    await act(async () => {
      render(<AvailableBooksList />)
    })

    const pagesFilter: HTMLInputElement = screen.getByRole('slider', { name: ARIA_LABELS.PagesFilter })

    await act(async () => {
      fireEvent.change(pagesFilter, { target: { value: 500 } })
    })

    const filteredBooks = screen.getAllByRole('article', { name: ARIA_LABELS.AvailableBookCard })
    filteredBooks.forEach(book => {
      const pagesElement = within(book).getByText(pageQuantityPattern)
      const pagesNumber = pagesElement.innerHTML.match(/\d+/)

      if (pagesNumber != null) {
        expect(Number(pagesNumber[0]) >= 500).toBeTruthy()
      }
    })
    await act(async () => {
      fireEvent.change(pagesFilter, { target: { value: 0 } })
    })
  })

  test('if books are filtered properly by genre', async () => {
    const user = userEvent.setup()

    await act(async () => {
      render(<AvailableBooksList />)
    })

    const genreFilter: HTMLSelectElement = screen.getByRole('combobox', { name: ARIA_LABELS.GenreFilter })

    await user.selectOptions(genreFilter, Genre.Fantasy)

    const filteredBooks = screen.getAllByRole('article', { name: ARIA_LABELS.AvailableBookCard })

    filteredBooks.forEach(book => {
      const genreElement = within(book).getByText(Genre.Fantasy)

      expect(genreElement.innerHTML).toBe(Genre.Fantasy)
    })

    await user.selectOptions(genreFilter, Genre.All)
  })

  test('if books are filtered properly by pages and genre', async () => {
    const user = userEvent.setup()

    await act(async () => {
      render(<AvailableBooksList />)
    })

    const pagesFilter: HTMLInputElement = screen.getByRole('slider', { name: ARIA_LABELS.PagesFilter })
    const genreFilter: HTMLSelectElement = screen.getByRole('combobox', { name: ARIA_LABELS.GenreFilter })

    await user.selectOptions(genreFilter, Genre['Sci-Fi'])

    await act(async () => {
      fireEvent.change(pagesFilter, { target: { value: 350 } })
    })

    const filteredBooks = screen.getAllByRole('article', { name: ARIA_LABELS.AvailableBookCard })

    filteredBooks.forEach(book => {
      const pagesElement = within(book).getByText(pageQuantityPattern)
      const pagesNumber = pagesElement.innerHTML.match(/\d+/)
      const genreElement = within(book).getByText(Genre['Sci-Fi'])

      if (pagesNumber != null) {
        expect(Number(pagesNumber[0]) >= 350).toBeTruthy()
      }
      expect(genreElement.innerHTML).toBe(Genre['Sci-Fi'])
    })

    await user.selectOptions(genreFilter, Genre.All)
    await act(async () => {
      fireEvent.change(pagesFilter, { target: { value: 0 } })
    })
  })

  test('if "No Books Found" result message is rendered properly', async () => {
    const user = userEvent.setup()

    await act(async () => {
      render(<AvailableBooksList />)
    })

    const searchBar: HTMLInputElement = screen.getByRole('searchbox', { name: ARIA_LABELS.SearchInput })
    const searchButton = screen.getByRole('button', { name: ARIA_LABELS.SearchButton })

    await user.type(searchBar, 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum')
    await user.click(searchButton)

    const noBooksFoundMessage = screen.queryByText(RESULT_MESSAGES.NoAvailableBooksFound)

    expect(noBooksFoundMessage).not.toBeNull()

    await user.clear(searchBar)
    await user.click(searchButton)
  })
})
