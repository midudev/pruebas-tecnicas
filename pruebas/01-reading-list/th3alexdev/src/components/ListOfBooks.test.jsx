import React, { useState } from "react";
import { describe, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import ListOfBooks from "./ListOfBooks";
import { BooksContext } from "../context/contextBooksProvider";
import { FiltersContext } from "../context/contextFiltersProvider";
import { ReadListContext } from "../context/contextUserListProvider";
import staticBooks from '../data/books.json'

describe("renders list of books", async () => {
  it("should render list of books with its properties", async () => {
    const books = staticBooks.library[0];

    const error = null

    const filtersContext = {
      filters: { sortByPages: false },
      filteredBooks: [books.book],
    };

    const readListContext = {
      addBook: () => {},
      removeBook: () => {},
    };

    const { getByText } = render(
      <BooksContext.Provider value={{ books, error }}>
        <ReadListContext.Provider value={readListContext}>
          <FiltersContext.Provider value={filtersContext}>
            <ListOfBooks />
          </FiltersContext.Provider>
        </ReadListContext.Provider>
      </BooksContext.Provider>
    );

    const bookElements = screen.queryAllByTestId("book-list-item");
    expect(bookElements.length).toBeGreaterThan(0);
  });
});
