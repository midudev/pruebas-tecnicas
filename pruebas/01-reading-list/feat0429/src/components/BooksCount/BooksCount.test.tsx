import { describe, expect, it } from 'vitest'
import { act, render, renderHook, screen, within } from '@testing-library/react'
import { TEXT_CONTENT } from '../../constants/DOM-text'
import { BooksCount } from './BooksCount'
import { getBooks } from '../../services/getBooks'
import { useFetchBooks } from '../../hooks/useFetchBooks'

describe('<BooksCount />', () => {
  it('should render and display available books count', async () => {
    renderHook(() => { useFetchBooks() })

    const textDisplayed = new RegExp(`${TEXT_CONTENT.AvailableBooksTitle}`)
    const books = await getBooks()

    await act(async () => {
      render(<BooksCount />)
    })

    const availableBoooksTitle = screen.getByText(textDisplayed)

    const bookCountElement = within(availableBoooksTitle).getByText(/\d+/)
    const bookCountNumber = bookCountElement.innerHTML.match(/\d+/)

    if (bookCountNumber != null) {
      expect(Number(bookCountNumber)).toBe(books.length)
    }
  })
})
