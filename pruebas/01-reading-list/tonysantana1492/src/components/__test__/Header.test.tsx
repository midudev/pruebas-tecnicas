import { render, screen } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'

import { Header } from '../Header'

const mockOnOpen = vi.fn()

vi.mock('../../store/menu', () => ({
  useMenu: () => ({
    onOpen: mockOnOpen
  })
}))

describe('Header Component Test', () => {
  it('should render the header with correct title and badge value', () => {
    render(<Header />)

    const titleElement = screen.getAllByText(/^Available Books/i)
    expect(titleElement).toBeTruthy()

    const badgeElement = screen.findByText('1')
    expect(badgeElement).toBeTruthy()
  })

  it('should call the onOpen function when button is clicked', () => {
    render(<Header />)

    const buttonElement = screen.getByRole('open-button')
    buttonElement.click()

    expect(mockOnOpen).toHaveBeenCalledTimes(1)
  })
})
