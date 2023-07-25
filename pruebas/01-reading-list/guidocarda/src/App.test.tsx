import { afterEach, describe, expect, it } from "vitest";
import {
  cleanup,
  findByText,
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "./App";

describe("App", () => {
  afterEach(cleanup);

  it("should render", () => {
    render(<App />);
  });

  it("should render title correctly", () => {
    render(<App />);
    screen.getByText("Biblioteca");
  });

  it("shoudn't render the reading list", () => {
    render(<App />);

    const readingList = document.querySelector(".readingList");
    expect(readingList).toBeFalsy();
  });

  it("should render a text input", () => {
    render(<App />);
    expect(screen.getByRole("textbox"));
  });

  it("should render a text input", () => {
    render(<App />);
    const element = screen.getByRole("textbox");
    expect(element.className).toEqual("search-input");
    expect(getComputedStyle(element).display).toEqual("inline-block");
  });

  it("should render a list of books", () => {
    render(<App />);
    const elements = screen.queryAllByRole("book");
    expect(elements.length).toBeTruthy();
  });

  it("should render 13 books", () => {
    render(<App />);
    const elements = screen.queryAllByRole("book");
    expect(elements.length).toEqual(13);
  });

  it("should add a book to the reading list", async () => {
    render(<App />);
    const bookCard = document.querySelector(".book") as Element;

    // fireEvent(bookCard, new MouseEvent("click"));
    fireEvent.click(bookCard);

    // const readingList = await screen.findByText("Lista de lectura");
    // expect(readingList).toBeTruthy();
    await waitFor(() => {
      const elements = screen.queryAllByRole("book");
      expect(elements.length).toEqual(12);
      expect(screen.getByText("Lista de lectura"));
    });
  });
});
