import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Books } from '..'
import { DRAG_EVENTS } from '../../constants'

vi.mock('../Header', () => ({
  Header: () => <h1>Header</h1>
}))

vi.mock('../BookList', () => ({
  BookList: () => <h1>BookList</h1>
}))

describe('BookItem Component Test', () => {
  it('should render the book', () => {
    const { container } = render(<Books />)
    expect(container).toBeTruthy()

    const headerElement = screen.getByText(/Header/i)
    expect(headerElement).toBeTruthy()

    const bookListElement = screen.getByText(/BookList/i)
    expect(bookListElement).toBeTruthy()
  })

  it('should get dataTransfer with correct value when drop', () => {
    const getDataMock = vi.fn()
    const dropEvent = { dataTransfer: { getData: getDataMock } }

    render(<Books />)
    const sectionElement = screen.getByRole('section')

    fireEvent.drop(sectionElement, dropEvent)

    expect(getDataMock).toHaveBeenCalledWith(DRAG_EVENTS.REMOVE_FROM_FAVORITES)
  })
})
