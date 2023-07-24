import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import App from '../App';
import { useBooks } from '../hooks/useBooks';


describe('App', () => {
  afterEach(cleanup)

  it('shold be books in the collection', () => {
    const { books } = useBooks()
    expect(books.length).toBeGreaterThan(0)
  })

  it('should be render App', () => {
    const app = render(<App />)
    expect(app).toMatchSnapshot()
  })

  it('should be render header', () => {
    render(<App />)
    screen.getByText(/maximo de paginas/i)
  })

  it('should be render book list', () => {
    render(<App />)
    const ul = screen.getByRole('list')
    expect(ul).toBeVisible()

    const { books } = useBooks()
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toEqual(books.length)
  })

  it('select filter should render options', () => {
    render(<App />)
    const select = screen.getAllByRole('option')

    const { genres } = useBooks()
    expect(select.length).toEqual(genres.length + 1)
  })

  it('readlist should be visible when click on a book button', () => {
    render(<App />)
    const buttons = screen.getAllByRole('button')
    let uls = screen.getAllByRole('list')
    expect(uls.length).toBe(1)
    fireEvent.click(buttons[0])
    uls = screen.getAllByRole('list')
    expect(uls.length).toBe(2)
  })
})