import { describe, expect, it, vi, afterEach, beforeEach } from "vitest";
import { getData } from "./services/getData";
import { booksFixtureDefault } from "./fixture/booksFixture";
import { render } from "@testing-library/react";
import BookCard from "./components/common/BookCard";

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

    const image = book.getByAltText(title);
    expect(image).toBeTruthy();

    const titleElem = book.getByText(title);
    expect(titleElem?.textContent).toBeTruthy();

    const genreElem = book.getByText(genre);
    expect(genreElem?.textContent).toBeTruthy();
  });
});
