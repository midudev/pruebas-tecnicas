import { render } from '@testing-library/react'
import { expect, it, describe } from 'vitest'

import { Loading } from '..'

describe('Loading Component Test', () => {
  it('should render without crashing', () => {
    const { container } = render(<Loading />)
    expect(container).toBeTruthy()
  })
})
