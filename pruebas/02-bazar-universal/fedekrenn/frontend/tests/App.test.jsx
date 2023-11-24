import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import App from '../src/App'

describe('App', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

  test('should render', () => {
    expect(screen.getByText('Bazar Online')).toBeDefined()
  })

  test('Should have a form', async () => {
    const user = userEvent.setup()

    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()

    const form = screen.getByRole('form')
    expect(form).toBeDefined()

    const button = form.querySelector('button')
    expect(button).toBeDefined()

    await user.type(input, 'laptop')
    expect(input.value).toBe('laptop')

    await user.click(button)
  })
})
