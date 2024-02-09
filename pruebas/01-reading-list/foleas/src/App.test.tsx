import { describe, expect, it, vi, afterEach, beforeEach } from "vitest";
import { getData } from "./services/getData";
import {
  booksFixtureDefault,
  booksFixturePagination,
} from "./fixture/booksFixture";
import { render, screen, cleanup } from "@testing-library/react";
import BookCard from "./components/common/BookCard";
// import Paginator from "./components/Paginator";

// import matchers from "@testing-library/jest-dom";
// expect.extend(matchers);

// SIMULATE FETCH THAT I WANT
const mockedFetch = vi.fn();
global.fetch = mockedFetch;

const endpoint = "./books.json";

describe("Fetching Data", () => {
  beforeEach(() => {
    // vi.fn().mockClear();
    mockedFetch.mockResolvedValue({
      json: () => booksFixtureDefault,
    });
  });
  afterEach(() => {
    cleanup();
    // vi.restoreAllMocks();
  });

  it("makes a GET request to fetch book list and returns the result", async () => {
    const booksList = await getData(endpoint);
    expect(booksList).toStrictEqual(booksFixtureDefault.library);
  });

  it("Should Render book Info", async () => {
    const booksList = await getData(endpoint);
    const {
      book: { ISBN, title, year, pages, genre, cover },
    } = booksList[0];

    // const { getByAltText, getByText } = render(
    const book = render(
      <BookCard
        key={ISBN}
        index={0}
        title={title}
        year={year}
        pages={pages}
        genre={genre}
        imageUrl={cover}
      />
    );

    book.getByAltText(title);
    book.getByText(title);
    book.getByText(genre);
  });

  it("Should show 4 per page", async () => {
    const perPage = 4;
    const page = 1;
    mockedFetch.mockResolvedValue({
      json: () => booksFixturePagination,
    });
    const booksList = await getData(endpoint);

    booksList
      .slice(perPage * (page - 1), perPage * page)
      .forEach(({ book }) => {
        const { ISBN, title, year, pages, genre, cover } = book;
        render(
          <BookCard
            key={ISBN}
            index={0}
            title={title}
            year={year}
            pages={pages}
            genre={genre}
            imageUrl={cover}
          />
        );
      });

    const allBooks = screen.getAllByRole("article");
    // console.log("allBooks", allBooks);
    expect(allBooks).toHaveLength(4);
  });
});
