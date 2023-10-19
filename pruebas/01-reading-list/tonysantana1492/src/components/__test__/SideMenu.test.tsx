import { render, screen, fireEvent } from '@testing-library/react'
import { vi, describe, expect, it } from 'vitest'

import { SideMenu } from '../SideMenu'

vi.mock('../Favorites', () => ({
  Favorites: () => <h1>Favorites</h1>
}))

const mockOnClose = vi.fn()

vi.mock('../../store/menu', () => ({
  useMenu: () => ({
    isOpen: true,
    onClose: mockOnClose
  })
}))

describe('SideMenu Component Test', () => {
  it('should render correctly', () => {
    render(<SideMenu />)

    const favoritesElement = screen.getByText('Favorites')
    expect(favoritesElement).toBeTruthy()
  })

  it('should call onClose when nav component is clicked', () => {
    render(<SideMenu />)

    const navElement = screen.getByRole('nav')
    fireEvent.click(navElement)

    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })
})
