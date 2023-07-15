import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import { describe, test, beforeEach, expect } from 'vitest'
import Search from './Search'

describe('Search', () => {
  beforeEach(cleanup)
  test('Should render the search component', () => {
    render(<Search/>)
  })

  test('Should have semantic tags', () => {
    const { container } = render(<Search/>)

    const form = container.querySelector('form')
    const label = container.querySelector('label')
    const input = container.querySelector('input')

    expect(form).toBeDefined()
    expect(label).toBeDefined()
    expect(input).toBeDefined()
  })

  test('Should focus the input', () => {
    render(<Search/>)
    const search = screen.getByTitle('Search')
    const input = screen.getByPlaceholderText('Search')
    fireEvent.click(search)
    expect(document.activeElement).toBe(input)
  })

  test('Should change the input value', () => {
    render(<Search/>)
    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, { target: { value: 'El señor de los anillos' } })
    expect(input.value).toBe('El señor de los anillos')
  })
})
