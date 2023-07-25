import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BooksContext } from './GlobalContext'

describe('GlobalContext', () => {
  test('should render a header and a main', () => {
    render(<BooksContext />)

    expect(screen.getByRole('banner')).toBeDefined()
    expect(screen.getByRole('main')).toBeDefined()
  })
})
