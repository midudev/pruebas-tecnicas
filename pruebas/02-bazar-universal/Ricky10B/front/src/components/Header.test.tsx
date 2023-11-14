import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Header } from './Header'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('<Header />', () => {
  it('Render the component Header correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const search = screen.getByRole('search')
    const header = screen.getByRole('banner')
    const input = screen.getByRole('textbox')

    expect(search).toBeDefined()
    expect(header).toBeDefined()
    expect(input).toBeDefined()
  })

  it('The form is filled correctly', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const form: HTMLFormElement = screen.getByRole('search')
    const input = screen.getByRole('textbox')

    expect(form).toBeDefined()

    await userEvent.type(input, 'lap')
    await userEvent.keyboard('[Enter]')

    const formData = new FormData(form)
    expect(formData.get('search')).toBe('lap')
  })
})
