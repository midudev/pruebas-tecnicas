import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageHeader } from './PageHeader'
import { ARIA_LABELS } from '../../constants/aria-labels'

describe('<PageHeader />', () => {
  it('should render header element', async () => {
    render(<PageHeader />)

    const pageHeaderElement = screen.getByRole('banner', { name: ARIA_LABELS.PageHeader })
    expect(pageHeaderElement).toBeDefined()
  })
})
