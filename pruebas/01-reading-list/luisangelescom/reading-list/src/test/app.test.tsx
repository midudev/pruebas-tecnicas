import { afterEach, describe, expect, it } from 'vitest'

import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import App from '../App'

describe('Home', () => {
  afterEach(cleanup)

  it('Should Render', () => {
    render(<App />)
  })

  it('It should have a libros label', () => {
    render(<App />)

    screen.getByText('Libros')
  })

  it('It should have a filter label', () => {
    render(<App />)

    screen.getByText('Filter')
  })

  it('Should have roles', () => {
    render(<App />)

    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(13)
  })

  it('Should have an input', () => {
    render(<App />)
    screen.getByRole('textbox')
  })

  it('One item should be added to the list', async () => {
    render(<App />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Harry' } })

    expect(input.value).toBe('Harry')
  })

  // list-book-user
})
