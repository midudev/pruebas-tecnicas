import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { ReadingListButton } from './ReadingListButton'
import { TEXT_CONTENT } from '../../constants/DOM-text'
import { ARIA_LABELS } from '../../constants/aria-labels'

describe('<ReadingListButton />', () => {
  it('should render and display the correct text and image', async () => {
    render(<ReadingListButton />)

    const button = screen.getByRole('button', { name: ARIA_LABELS.ShowReadingList })
    expect(button).toBeDefined()

    const readingListIcon = screen.getByRole('img', { name: 'Imagen de marcador' })
    expect(readingListIcon).toBeDefined()

    const listTitleContainer = screen.getByText(TEXT_CONTENT.ListTitle)
    expect(listTitleContainer).toBeDefined()

    const booksInListCounter = within(listTitleContainer).getByText(/\d+/)
    expect(booksInListCounter).toBeDefined()
    expect(Number(booksInListCounter.innerHTML)).toBe(0)
  })
})
