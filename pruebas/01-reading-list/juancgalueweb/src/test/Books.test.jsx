import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Books } from '../components/Books'
import { useBooksStore } from '../stores/books'

describe('Book component', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
  })

  it('should call setBooks function on render', () => {
    const spySetBooks = vi
      .spyOn(useBooksStore.getState(), 'setBooks')
      .mockImplementation(() => {})
    render(<Books />)
    expect(spySetBooks).toHaveBeenCalled()
  })

  it('should render', () => {
    render(<Books />)
  })

  it('should render button text to show reading list', () => {
    render(<Books />)
    screen.getByText('Ver lista de lectura')
  })
})
