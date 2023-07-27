import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('filters books', async () => {
  const user = userEvent.setup()

  render(<App />)

  screen.getByText(/harry potter y la piedra filosofal/i)

  const searchInput = screen.getByRole('textbox', {
    name: /search/i
  })
  await user.type(searchInput, 'de')

  screen.getByText(/el señor de los anillos/i)
  screen.getByText(/juego de tronos/i)
  screen.getByText(/la guía del autoestopista galáctico/i)
  screen.getByText(/la llamada de cthulhu/i)

  expect(screen.queryByText(/harry potter y la piedra filosofal/i)).toBeNull()
})
