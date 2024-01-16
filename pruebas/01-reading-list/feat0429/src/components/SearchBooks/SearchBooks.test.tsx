import { describe, it, test, afterEach, expect } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBooks } from './SearchBooks'
import { ARIA_LABELS } from '../../constants/aria-labels'
import { PLACEHOLDERS } from '../../constants/element-attributes'
import { FIELD_LABELS } from '../../constants/DOM-text'

describe('<SearchBooks />', () => {
  afterEach(cleanup)

  it('should render and display correct text', () => {
    render(<SearchBooks />)

    const searchLabel = screen.getByText(FIELD_LABELS.SearchBooks)
    expect(searchLabel).toBeDefined()

    const searchInput: HTMLInputElement = screen.getByRole('searchbox', { name: ARIA_LABELS.SearchInput })
    expect(searchInput).toBeDefined()
    expect(searchInput.placeholder).toBe(PLACEHOLDERS.SearchInput)

    const searchButton = screen.getByRole('button', { name: ARIA_LABELS.SearchButton })
    expect(searchButton).toBeDefined()
  })

  test('if input element value changes when typing', async () => {
    const user = userEvent.setup()

    render(<SearchBooks />)

    const searchInput: HTMLInputElement = screen.getByRole('searchbox', { name: ARIA_LABELS.SearchInput })

    await user.type(searchInput, 'lorem ipsum')

    expect(searchInput.value).toBe('lorem ipsum')
  })
})
