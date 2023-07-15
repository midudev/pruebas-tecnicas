import { render, screen } from '@testing-library/react'
import App from '../App'
import { FiltersProvider } from '../contexts/filters'
import '@testing-library/jest-dom/extend-expect'

test('renders the title of the App', () => {
  render(
    <FiltersProvider>
      <App />
    </FiltersProvider>
  )
  const linkElement = screen.getByText(/Library/i)
  expect(linkElement).toBeInTheDocument()
}
)
