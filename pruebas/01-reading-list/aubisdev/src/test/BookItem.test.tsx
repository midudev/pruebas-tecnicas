import { describe, expect, afterEach, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { BookItem } from "../components";
import { Book } from "../models";

const mockData: Book = {
  title: "El Señor de los Anillos",
  pages: 1200,
  genre: "Fantasía",
  cover:
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
  synopsis:
    "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
  year: 1954,
  ISBN: "978-0618640157",
  author: {
    name: "J.R.R. Tolkien",
    otherBooks: ["El Hobbit", "El Silmarillion"],
  },
};

describe("Book Item testing", () => {
  afterEach(cleanup);

  it("should render", (): void => {
    render(<BookItem book={mockData} />);
  });

  it("Should  ", (): void => {
    render(<BookItem book={mockData} />);
    screen.getByText(mockData.title);
  });
  it("should render the title", () => {
    render(<BookItem book={mockData} />);
    expect(screen.getByText("El Señor de los Anillos"));
  });

  it("should render the author", () => {
    render(<BookItem book={mockData} />);

    expect(screen.getByText("J.R.R. Tolkien"));
  });

  it("should render the pages", () => {
    render(<BookItem book={mockData} />);

    expect(screen.getByText("1200 Pages"));
  });

  it("should render the year", () => {
    render(<BookItem book={mockData} />);

    expect(screen.getByText("(1954)"));
  });

  it("should render the correct image src", () => {
    render(<BookItem book={mockData} />);

    const image = document.querySelector("img") as HTMLImageElement;
    expect(image.src).toBe(
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg"
    );
  });
});
