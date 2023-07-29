import React from 'react'

import { BookContextProvider } from '../src/context/BookContext'

import { afterEach, describe, expect, it } from 'vitest'
import { act, cleanup, renderHook } from '@testing-library/react'

import useBooks from '../src/components/hooks/useBooks'
import { library } from '../../books.json'

const GENRE = 'Fantasía'

describe('ListOfBooks', (): void => {
  afterEach(cleanup)
  it('should render use books', () => {
    const wrapper = ({ children }) => (
      <BookContextProvider>{children}</BookContextProvider>
    )
    renderHook(() => useBooks(), { wrapper })
  })
  it('should filter books by genre', () => {
    const wrapper = ({ children }) => (
      <BookContextProvider>{children}</BookContextProvider>
    )
    const { result } = renderHook(() => useBooks(), {
      wrapper,
      initialProps: {
        books: library,
      },
    })
    act(() => {
      result.current.filterByGenre(GENRE)
    })
    const booksfilter = result.current.getBooks()
    booksfilter.map((book) => {
      expect(book.book.genre === GENRE).toBe(true)
    })
  })
})
