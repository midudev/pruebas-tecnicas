import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";
import Books from "../src/assets/books.json";

describe("App", () => {
  afterEach(cleanup);

  it("should render", () => {
    render(<App />);
  });

  it("should show 13 books in library", () => {
    render(<App />);
    expect(document.querySelectorAll(".library-book").length).toBe(
      Books.library.length
    );
  });

  it("should show 0 books in reading list", () => {
    render(<App />);
    expect(document.querySelectorAll(".reading-book").length).toBe(0);
  });

  it("should move the book from library to reading list", () => {
    render(<App />);
    const book = document.querySelector(".library-book");
    fireEvent.click(book);

    expect(document.querySelectorAll(".library-book").length).toBe(12);
    expect(document.querySelectorAll(".reading-book").length).toBe(1);
  });

  it("should not move the book from reading list to library if not clicked in cross sign", () => {
    render(<App />);
    const readingBook = document.querySelector(".reading-book");
    fireEvent.click(readingBook);

    expect(document.querySelectorAll(".library-book").length).toBe(12);
    expect(document.querySelectorAll(".reading-book").length).toBe(1);
  });

  it("should move the book from reading list to library", () => {
    render(<App />);
    const readingBook = document
      .querySelector(".reading-book")
      .querySelector(".reading-book-button");
    fireEvent.click(readingBook);

    expect(document.querySelectorAll(".library-book").length).toBe(13);
    expect(document.querySelectorAll(".reading-book").length).toBe(0);
  });
});
