import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AvailableBooksListHeader } from './AvailableBooksListHeader'
import { ARIA_LABELS } from '../../constants/aria-labels'

describe('<AvailableBooksListHeader />', () => {
  it('should render header component correctly', () => {
    render(
        <AvailableBooksListHeader />
    )

    const header = screen.getByRole('banner', { name: ARIA_LABELS.AvailableBooksHeader })
    expect(header).toBeDefined()
  })
})
