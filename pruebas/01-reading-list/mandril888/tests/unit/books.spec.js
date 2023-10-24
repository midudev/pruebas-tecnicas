import { setActivePinia, createPinia } from "pinia";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";
import BooksList from "@/components/BooksList.vue";
import { getAllBooks } from "@/services/booksRepository";
import { generateBook } from "./factories/books";

jest.mock("@/services/booksRepository");

let books;

describe("BooksList component", () => {
  beforeAll(() => {
    setActivePinia(createPinia());
    books = generateBook();
    getAllBooks.mockResolvedValueOnce(books);
  });

  it("should show loading message if no books are passed", async () => {
    render(BooksList, {
      props: { type: "bookAvailable", books: [] },
    });

    const loadingText = await screen.getByText(/cargando libros/i);

    expect(loadingText).toBeInTheDocument();
  });

  it("should list books if they are passes as prop", async () => {
    render(BooksList, {
      props: { type: "bookAvailable", books: books },
    });

    const title = await screen.findByRole("heading", {
      name: books[0].book.title,
    });

    expect(title).toBeInTheDocument();
  });

  describe("if prop type = 'bookAvailable' is passed", () => {
    it("should show Add List button", async () => {
      render(BooksList, {
        props: { type: "bookAvailable", books: books },
      });

      const addButton = screen.getByRole("button", {
        name: /añadir/i,
      });

      expect(addButton).toBeInTheDocument();
    });

    it("should not show Remove List button", async () => {
      render(BooksList, {
        props: { type: "bookAvailable", books: books },
      });

      const removeButton = screen.queryByRole("button", {
        name: /quitar/i,
      });

      expect(removeButton).not.toBeInTheDocument();
    });
  });

  describe("if prop type = 'bookList' is passed", () => {
    it("should not show Add List button", async () => {
      render(BooksList, {
        props: { type: "bookList", books: books },
      });

      const addButton = screen.queryByRole("button", {
        name: /añadir/i,
      });

      expect(addButton).not.toBeInTheDocument();
    });

    it("should show Remove List button", async () => {
      render(BooksList, {
        props: { type: "bookList", books: books },
      });

      const removeButton = screen.getByRole("button", {
        name: /quitar/i,
      });

      expect(removeButton).toBeInTheDocument();
    });
  });
});
