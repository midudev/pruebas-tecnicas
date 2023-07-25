import { screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import userEvent from '@testing-library/user-event'
import App from '@/App'
import {
  render,
  MOCK_BOOKS,
  getFromTestStorage,
  maxPages as pages
} from '@/__tests__/utils'

const setup = () => {
  render(
    <>
      <App />
      <div id='modal' />
    </>
  )
}

describe('GIVEN <App />', () => {
  afterEach(() => {
    cleanup()
  })

  it('SHOULD render the books list properly', () => {
    setup()

    const books = screen.getAllByRole('listitem')

    expect(books.length).toBe(MOCK_BOOKS.length)

    MOCK_BOOKS.forEach(book => {
      expect(screen.getByText(book.title)).toBeTruthy()

      expect(
        screen.getAllByText(`${book.pages} páginas`).length
      ).toBeGreaterThanOrEqual(1)

      expect(
        screen.getAllByText(`Año: ${book.year}`).length
      ).toBeGreaterThanOrEqual(1)
    })
  })

  it('SHOULD filter books properly based on genre', async () => {
    userEvent.setup()
    setup()

    const genreFilter = screen.getByRole('combobox')

    const satisfyBooks = MOCK_BOOKS.filter(book => book.genre === 'Fantasía')

    await userEvent.selectOptions(genreFilter, 'Fantasía')

    const filteredBooks = screen.getAllByRole('listitem')

    expect(filteredBooks.length).toBe(satisfyBooks.length)
  })

  it('SHOULD filter books properly based on min pages', () => {
    setup()

    const minPagesFilter = screen.getByRole('slider')

    const satisfyBooks = MOCK_BOOKS.filter(book => book.pages >= pages)

    fireEvent.change(minPagesFilter, {
      target: {
        value: pages
      }
    })

    const filteredBooks = screen.getAllByRole('listitem')

    expect(filteredBooks.length).toBe(satisfyBooks.length)
  })

  it('SHOULD display the reading list modal properly', async () => {
    setup()

    const readingListBtn = screen.getByRole('button', {
      name: /mostrar lista de lectura/i
    })

    await userEvent.click(readingListBtn)

    expect(
      await screen.findByRole('heading', {
        name: 'Lista de lectura',
        level: 2
      })
    ).toBeTruthy()
  })

  it('SHOULD add and remove a book from the reading list', async () => {
    setup()

    const [btn] = screen.getAllByRole('button', {
      name: /agregar a lista de lectura/i
    })

    await userEvent.click(btn)

    expect(btn.innerText).toBe('Quitar de la lista de lectura')

    expect(getFromTestStorage()).toEqual([MOCK_BOOKS[0]])

    await userEvent.click(btn)

    expect(btn.innerText).toBe('Agregar a lista de lectura')

    expect(getFromTestStorage()).toEqual([])
  })
})
