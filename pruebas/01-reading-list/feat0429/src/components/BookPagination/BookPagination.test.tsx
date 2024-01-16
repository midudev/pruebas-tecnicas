import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { BookPagination } from './BookPagination'

const mockChangePage = vi.fn()

describe('<BookPagination />', () => {
  afterEach(cleanup)

  it('should render correct numbers when current page is within start range (current page = 3 of 21)', () => {
    render(<BookPagination totalBooks={250} currentPage={3} handlePagination={mockChangePage} />)

    const pages = [1, 2, 3, 4, 5, 20, 21]

    const numberElements = screen.queryAllByText(/\d+/)

    numberElements.forEach((numberElement, index) => {
      const number = numberElement.innerHTML
      expect(Number(number)).toBe(pages[index])
    })
  })

  it('should render correct numbers when current page in the middle (current page = 7 of 21)', () => {
    render(<BookPagination totalBooks={250} currentPage={7} handlePagination={mockChangePage} />)

    const pages = [1, 2, 5, 6, 7, 8, 9, 20, 21]

    const numberElements = screen.queryAllByText(/\d+/)

    numberElements.forEach((numberElement, index) => {
      const number = numberElement.innerHTML
      expect(Number(number)).toBe(pages[index])
    })
  })

  it('should render correct numbers when current page in the final range (current page = 18 of 21)', () => {
    render(<BookPagination totalBooks={250} currentPage={18} handlePagination={mockChangePage} />)

    const pages = [1, 2, 17, 18, 19, 20, 21]

    const numberElements = screen.queryAllByText(/\d+/)

    numberElements.forEach((numberElement, index) => {
      const number = numberElement.innerHTML
      expect(Number(number)).toBe(pages[index])
    })
  })
})
