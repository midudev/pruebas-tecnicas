import App from '../App'
import { render, screen } from '../utils/test-utils'

describe('App', () => {
  it('should render the header propertly', () => {
    render(<App />)
    const header = screen.getByText(/letsread/i)
    expect(header).toBeDefined()
    expect(header.tagName).toBe('H1')
  })

  it('should render the list of books propertly', () => {
    render(<App />)
    const bookList = screen.getByRole('list')
    expect(bookList).toBeDefined()
  })

  it('should render the aside propertly', () => {
    render(<App />)
    const aside = screen.getByRole('complementary')
    expect(aside).toBeDefined()
  })

})
