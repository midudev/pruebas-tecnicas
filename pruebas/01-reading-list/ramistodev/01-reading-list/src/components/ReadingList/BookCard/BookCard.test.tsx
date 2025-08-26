import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BookCard } from "./BookCard";
import { BooksContext } from "../../../context/BooksContext";
import { type Library, BookList } from "../../../types.d";
import { type BooksContextType } from "../../../context/BooksContext";

// Mock data
const mockBooks: Library[] = [
  {
    book: {
      title: "Test Book",
      pages: 123,
      genre: "Fantasía",
      cover: "https://covers.openlibrary.org/b/id/10521289-L.jpg",
      synopsis: "Una sinopsis de prueba.",
      year: 2020,
      ISBN: "123-456-789",
      author: { name: "Autor Prueba", otherBooks: [] },
    },
  },
];

const mockContext: BooksContextType = {
  books: mockBooks,
  setBooks: () => {},
  selectedGenre: null,
  setSelectedGenre: () => {},
  maxPages: 999,
  setMaxPages: () => {},
  selectedBooks: [],
  setSelectedBooks: () => {},
  bookStatus: BookList.AVAILABLE,
  setBookStatus: () => {},
};

describe("BookCard", () => {
  it("muestra el título del libro", () => {
    render(
      <BooksContext.Provider value={mockContext as BooksContextType}>
        <BookCard />
      </BooksContext.Provider>
    );
    expect(screen.getByText("Test Book")).toBeInTheDocument();
  });
});
