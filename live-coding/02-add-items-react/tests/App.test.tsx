import React from 'react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('<App />', () => {
  render(<App />)

  test('should render an specific item', () => {
    const title = screen.getByText('Mouse inalámbrico')
    expect(title).toBeDefined()
  })

  test('should add items and remove them', async () => {
    const user = userEvent.setup()

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    const button = form.querySelector('button')

    expect(input).toBeDefined()
    expect(form).toBeDefined()
    expect(button).toBeDefined()

    const itemsQuantity = screen.getAllByRole('listitem').length
    const randomText = crypto.randomUUID()

    await user.type(input, randomText)
    await user.click(button!)

    const list = screen.getByRole('list')

    expect(list).toBeDefined()
    expect(list.childNodes.length).toBe(itemsQuantity + 1)
    expect(screen.getByText(randomText)).toBeDefined()

    const items = list.querySelectorAll('li')
    const newItem = items[items.length - 1]

    await user.click(newItem)

    expect(list.childNodes.length).toBe(itemsQuantity)
  })
})
