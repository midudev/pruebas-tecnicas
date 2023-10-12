import { render, screen, fireEvent } from '@testing-library/react'
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

test('render the header of the App', () => {
  render(
    <FiltersProvider>
      <App />
    </FiltersProvider>
  )
  const linkElement = screen.getByText(/Category/i)
  expect(linkElement).toBeInTheDocument()
}
)
test('render the books of the App', () => {
  render(
    <FiltersProvider>
      <App />
    </FiltersProvider>
  )
  const linkElement = screen.getAllByTestId('book')
  expect(linkElement.length).toBeGreaterThan(0)
}
)
