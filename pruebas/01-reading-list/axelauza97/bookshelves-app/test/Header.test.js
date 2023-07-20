import Header from "../components/layout/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import jest-dom's matchers

import books from "../public/books.json";

const DUMMY_BOOKS = books.library;
let modifiedBooks = DUMMY_BOOKS.map((book) => {
  book.book.wish = false;
  book.book.visible = true;
  return book;
});
test("renders the component with the correct text", () => {
  const sampleText = "Sin libros de lectura";
  render(<Header books={modifiedBooks} />);

  const renderedText = screen.getByText(sampleText);
  expect(renderedText).toBeInTheDocument();
});
