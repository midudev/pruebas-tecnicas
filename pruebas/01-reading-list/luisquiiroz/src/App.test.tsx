import App from './App'
import { BookList } from '../src/components/BookList'
import { render, screen } from '@testing-library/react'

describe('Simple working test', () => {
  beforeEach(() => {
    render(<App/>)
  })
  test('the title is visible', () => {
    expect(screen.getByText('Biblioteca')).toBeDefined()
    })

  test('render all books', () => {
    expect(screen.getByText('Libros disponibles (13)')).toBeDefined()
  })
  
  test('render a specific book', () => {
    expect(screen.getByText('Dune')).toBeDefined()
    expect(screen.queryByText(/by Frank Herbert/)).toBeDefined()
  })
})
