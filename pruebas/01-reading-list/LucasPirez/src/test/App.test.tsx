import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  test('renders the App title', () => {
    render(<App />)

    const elemento = screen.getByText('App lista de Lectura')

    expect(elemento).toBeDefined()
  })
})
