import { describe, expect, it, vi, afterEach, beforeEach } from "vitest";
import { getData } from "./services/getData";
import { getBooksResponseFixture } from "./fixture/booksFixture";

// SIMULATE FETCH THAT I WANT
const mockedFetch = vi.fn();
global.fetch = mockedFetch;

const endpoint = "./books.json";

describe("Fetching Data", () => {
  beforeEach(() => {
    // vi.fn().mockClear();
    mockedFetch.mockResolvedValue({
      json: () => getBooksResponseFixture,
    });
  });
  afterEach(() => {
    // vi.restoreAllMocks();
  });

  it("makes a GET request to fetch book list and returns the result", async () => {
    const booksList = await getData(endpoint);
    expect(booksList).toStrictEqual(getBooksResponseFixture.library);
  });
});
