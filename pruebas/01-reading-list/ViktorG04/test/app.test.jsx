import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it, vi, expect } from "vitest";
import { Provider } from "react-redux";

import Header from "../src/components/Header";
import Filters from "../src/components/Filters";
import BookList from "../src/components/book/bookList";
import Aside from "../src/components/favoriteList/Aside";
import books from "../src/mocks/books.json";
import store from "./storeTest";

describe("Header", () => {
  afterEach(cleanup);
  it("should render to Header Component", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });

  it("should render one title that says 12 books Available", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    screen.getAllByText("12 books Available");
  });

  it("should change light button to dark button", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    screen.getByText("Light");
  });
});

describe("Filters", () => {
  afterEach(cleanup);
  const filters = { genre: "All", pages: "10" };
  const handleOnChange = vi.fn();

  it("Should render Filters", () => {
    render(
      <Provider store={store}>
        <Filters filters={filters} handleOnChange={handleOnChange} />
      </Provider>
    );
  });

  it("Check if the options are rendered", () => {
    const genres = ["All", "Ciencia ficción", "Fantasía", "Terror", "Zombies"];
    render(
      <Provider store={store}>
        <Filters filters={filters} handleOnChange={handleOnChange} />
      </Provider>
    );
    genres.forEach((genre) => {
      const optionElement = screen.getByText(genre);
      expect(optionElement).toBeDefined();
    });
  });
});

describe("BookList", () => {
  afterEach(cleanup);
  it("should render 13 books in List component", () => {
    render(
      <Provider store={store}>
        <BookList books={books.library} />
      </Provider>
    );
    const allBooks = screen.getAllByRole("img");
    expect(allBooks.length).toBe(13);
  });

  it("should add a book to the reading list", () => {
    render(
      <Provider store={store}>
        <BookList books={books.library} />
      </Provider>
    );
    const book = screen.getByAltText("El resplandor");
    fireEvent.click(book);
  });
});

describe("Aside", () => {
  afterEach(cleanup);
  it("should render one title that says 1 books in list", () => {
    render(
      <Provider store={store}>
        <Aside />
      </Provider>
    );
    screen.getAllByText("1 books in list");
  });

  it("should remove a book from the reading list", () => {
    render(
      <Provider store={store}>
        <Aside />
      </Provider>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
  });
});
