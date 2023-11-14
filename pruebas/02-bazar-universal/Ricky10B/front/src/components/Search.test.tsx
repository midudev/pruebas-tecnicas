import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Search } from './Search'

describe('<Search />', () => {
  it('Render the input correctly', () => {
    render(
      <Search />
    )

    const input = screen.getByRole('textbox')
    const fieldset = screen.getByRole('group')

    expect(input).toBeDefined()
    expect(fieldset).toBeDefined()
  })

  it('Verify the error class is present', () => {
    render(
      <Search
        isEmpty
      />
    )

    const classNameError = 'border border-red-400'

    const input = screen.getByRole('textbox')
    expect(input).toHaveClass(classNameError)
  })

  it('Verify the error class is not present', () => {
    render(
      <Search
        isEmpty={false}
      />
    )

    const classNameError = 'border border-red-400'

    const input = screen.getByRole('textbox')
    expect(input).not.toHaveClass(classNameError)
  })

  it('Verify the write an remove in the input', async () => {
    render(
      <Search />
    )

    const input: HTMLInputElement = screen.getByRole('textbox')
    await userEvent.type(input, 'smart')
    expect(input.value).toBe('smart')

    await userEvent.clear(input)
    expect(input.value).toBe('')
  })
})
