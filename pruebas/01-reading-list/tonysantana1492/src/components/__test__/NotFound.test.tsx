import { render } from '@testing-library/react'
import { expect, it, describe } from 'vitest'

import { NotFound } from '..'

describe('NotFound Component Test', () => {
  it('should render without crashing', () => {
    const { container } = render(<NotFound />)
    expect(container).toBeTruthy()
  })
})
