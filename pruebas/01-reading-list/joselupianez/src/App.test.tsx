import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'
import { library } from '../../books.json'


it("should have an empty reading list", () => {
    render(<App />)
    const message = screen.queryByTestId('totalreadinglist')?.textContent
    expect(message).toContain(0)
})

it("should display all books", () => {
    render(<App />)
    const books = screen.getAllByTestId('booklist-item')
    expect(library.length).toBe(books.length)
})

it("should add book to reading list", () => {
    render(<App />)
    const bookButton = screen.getAllByTestId('addbook')[0]
    fireEvent.click(bookButton)
    const message = screen.queryByTestId('totalreadinglist')?.textContent
    expect(message).toContain('1')
})

it("should have one book less on the book list", () => {
    render(<App />)
    const books = screen.getAllByTestId('booklist-item')
    expect(library.length-1).toBe(books.length)
})

it("should remove book from reading list", () => {
    render(<App />)
    const bookButton = screen.getAllByTestId('removebook')[0]
    fireEvent.click(bookButton)
    const message = screen.queryByTestId('totalreadinglist')?.textContent
    expect(message).toContain('0')
})