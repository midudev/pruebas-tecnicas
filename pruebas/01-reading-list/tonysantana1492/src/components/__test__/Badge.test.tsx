import { render, screen } from '@testing-library/react'

import { Badge } from '../Badge'
import { describe, expect, it } from 'vitest'

describe('Badge Component Test', () => {
  it('should render the badge with the provided value', () => {
    const value = 5
    render(<Badge value={value} />)

    const badgeElement = screen.getByText(value.toString())
    expect(badgeElement).toBeTruthy()
  })
})
