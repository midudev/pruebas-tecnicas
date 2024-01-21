import { describe, test, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GenreFilter } from './GenreFilter'
import { FIELD_LABELS } from '../../constants/DOM-text'
import { ARIA_LABELS } from '../../constants/aria-labels'
import { Genre } from '../../constants/genres'
import userEvent from '@testing-library/user-event'

const genres = Object.values(Genre)

describe('<GenreFilter />', () => {
  it('should render and display correct text and options', () => {
    render(
        <GenreFilter />
    )

    const filterLabel = screen.getByText(FIELD_LABELS.Genre)
    expect(filterLabel).toBeDefined()

    const genreDropdown = screen.getByRole('combobox', { name: ARIA_LABELS.GenreFilter })
    expect(genreDropdown).toBeDefined()

    const genreOptions: HTMLOptionElement[] = screen.getAllByRole('option')
    genreOptions.forEach(genreOption => {
      expect(genres.includes(genreOption.value as Genre)).toBeTruthy()
    })
  })

  test('if correct option is selected when user selects one genre', async () => {
    const user = userEvent.setup()

    const genreDropdown = screen.getByRole('combobox', { name: ARIA_LABELS.GenreFilter })
    expect(genreDropdown).toBeDefined()

    await user.selectOptions(genreDropdown, Genre.Horror)

    const selectedOption: HTMLOptionElement = screen.getByRole('option', { name: Genre.Horror })
    expect(selectedOption.selected).toBeTruthy()
  })
})
