import { describe, test, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'

import App from '../src/App'
import {BookContext} from '../src/context/BookContext';
import { PropBookContext } from '../src/types';
import booksJson from '../src/constant/books.json';

const mockProsContext: PropBookContext = {
  booksList:[],
  bookPendingList:[],
  numberBookPending:0,
  listGenre:[],
  selectGenre:'',
  search:'',

  addBookPending:vi.fn(),
  isBookPending:vi.fn(),
  removeBookPending:vi.fn(),
  funOnChangeGenre:vi.fn(),
  funOnChangeSearch:vi.fn(),
  getBookId:vi.fn(),
}

describe('check that the <App /> component renders', () => {

  const bookList = booksJson.library.map((book) => book.book)
  const listGenre = bookList.map((book) => book.genre)

  test('check that the page title exists', () => {
    const wrapper = render(
      <BookContext.Provider value={mockProsContext} >
        <App />
      </BookContext.Provider>
    )
    expect(wrapper).toBeTruthy()

    // Get by h1
    const h1 = wrapper.container.querySelector('h1')
    expect(h1?.textContent).toBe('La Librería')

  })

  test('check list of books', () => {
  
    render(
      <BookContext.Provider value={{
          ...mockProsContext,
          booksList:bookList,
        }}
      >
        <App />
      </BookContext.Provider>
    )

    const list = screen.getByRole('list-book')
    const { getAllByRole } = within(list)
    const items = getAllByRole("list-book-item")

    expect(items.length).toBe(bookList.length)
  })

  test('check list of books pending', () => {
    const mockListPending = [...bookList]
    mockListPending.length = 3

    render(
      <BookContext.Provider value={{
          ...mockProsContext,
          booksList:bookList,
          bookPendingList:mockListPending,
          numberBookPending:mockListPending.length,
        }}
      >
        <App />
      </BookContext.Provider>
    )

    const asideListPending = screen.getByRole('aside-list-pending')
    expect(asideListPending.classList.contains('hidden')).not.toBeTruthy()

    const list = screen.getByRole('list-book-pending')
    const { getAllByRole } = within(list)
    const items = getAllByRole("list-book-pending-item")

    expect(items.length).toBe(mockListPending.length)
  })

  test('check select genre', () => {
    
    render(
      <BookContext.Provider value={{
          ...mockProsContext,
          booksList:bookList,
          listGenre:listGenre,
        }}
      >
        <App />
      </BookContext.Provider>
    )

    const list = screen.getByRole('select-genre')
    const { getAllByRole } = within(list)
    const items = getAllByRole("select-genre-item")
    
    //Se le agrega +1 porque se agrega un item vació
    expect(items.length).toBe(listGenre.length + 1)
  })

});