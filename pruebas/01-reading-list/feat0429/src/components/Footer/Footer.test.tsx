import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { TEXT_CONTENT } from '../../constants/DOM-text'

describe('<Footer />', () => {
  it('should render and display proper text', () => {
    render(
        <Footer />
    )

    const madeByTextElement = screen.queryByText(TEXT_CONTENT.MadeBy)
    expect(madeByTextElement).not.toBeNull()

    const myName = screen.queryByText('Fredy Amaya')
    expect(myName).not.toBeNull()
  })
})
