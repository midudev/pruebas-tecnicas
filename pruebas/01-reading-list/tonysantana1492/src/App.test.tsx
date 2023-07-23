import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App Component Test', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeTruthy()
  })

  it('renders header', () => {
    render(<App />)
    const headerTitleElement = screen.findByText(/Available Books/i)
    expect(headerTitleElement).toBeTruthy()
  })

  it('filter by title', async () => {
    const user = userEvent.setup()
    render(<App />)

    const titleFilter = await screen.findByPlaceholderText(/Search book titles.../i)
    await user.type(titleFilter, 'El Señor de los Anillos')
  })
})
