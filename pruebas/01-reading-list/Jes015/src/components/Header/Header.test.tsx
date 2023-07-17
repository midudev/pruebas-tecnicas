import { render, screen } from '@testing-library/react'
import { Header } from '../'

describe('<Header />', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('Should render its elements', () => {
    expect(screen.getByText('Remove or add a book clicking')).toBeDefined()
  })
})
