import { render, screen, fireEvent } from "@testing-library/react"
import { UserContext } from "../src/context/userContext"
import BookList from "../src/components/BookList"
import { describe, it, Mock, expect, vi } from "vitest"

// Mock data
const books = [{ ISBN: "123", cover: "cover1.jpg", title: "Book 1" }]

// Helper function to render the BookList component with a custom context value
const renderBookListWithContext = (userList, addBook) => {
  return render(
    <UserContext.Provider value={{ userList, addBook }}>
      <BookList filteredBooks={books} />
    </UserContext.Provider>
  )
}

describe("UserList component", () => {
  it("renders the Book passed", () => {
    const mockAddBook = vi.fn()

    renderBookListWithContext([], mockAddBook)

    expect(screen.getByAltText(/Book 1 cover/)).toBeInTheDocument()
  })

  it('clicking "Add to List" button calls addBook', () => {
    const mockAddBook = vi.fn()
    renderBookListWithContext([], mockAddBook)

    // Click the "Add to List" button
    const bookElement = screen.getByText(/Add to List/)
    fireEvent.click(bookElement)

    expect(mockAddBook).toHaveBeenCalledOnce()
  })

  it('clicking "Details" button opens the BookDetailsDialog', () => {
    const mockAddBook = vi.fn()
    renderBookListWithContext([], mockAddBook)

    // Click the "Details" button
    const detailsBtn = screen.getByText(/Details/)
    fireEvent.click(detailsBtn)

    expect(screen.getByText(/Book 1/)).toBeInTheDocument()
  })
})
