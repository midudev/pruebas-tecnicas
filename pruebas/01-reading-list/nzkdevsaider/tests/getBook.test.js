import booksData from "./books.json";
import { getBooks } from "./bookSearch";

describe("getBooks", () => {
  // Tests that the function returns an array of books when given valid search term, genre, and pages
  it("should return an array of books when given valid search term, genre, and pages", () => {
    const searchTerm = "Harry Potter";
    const genre = "Fantasy";
    const pages = 500;

    const result = getBooks(searchTerm, genre, pages);

    expect(Array.isArray(result)).toBe(true);
  });

  // Tests that the function returns an empty array when no books match the search criteria
  it("should return an empty array when no books match the search criteria", () => {
    const searchTerm = "Nonexistent Book";
    const genre = "Mystery";
    const pages = 300;

    const result = getBooks(searchTerm, genre, pages);

    expect(result).toEqual([]);
  });

  // Tests that the function returns all books when search term, genre, and pages are set to "all"
  it('should return all books when search term, genre, and pages are set to "all"', () => {
    const searchTerm = "all";
    const genre = "all";
    const pages = "all";

    const result = getBooks(searchTerm, genre, pages);

    expect(result).toEqual(booksData.library);
  });

  // Tests that the function returns an empty array when given an invalid genre
  it("should return an empty array when given an invalid genre", () => {
    const searchTerm = "Harry Potter";
    const genre = "Invalid Genre";
    const pages = 500;

    const result = getBooks(searchTerm, genre, pages);

    expect(result).toEqual([]);
  });

  // Tests that the function returns an empty array when given a negative number of pages
  it("should return an empty array when given a negative number of pages", () => {
    const searchTerm = "Harry Potter";
    const genre = "Fantasy";
    const pages = -100;

    const result = getBooks(searchTerm, genre, pages);

    expect(result).toEqual([]);
  });

  // Tests that the function returns an empty array when given a non-numeric value for pages
  it("should return an empty array when given a non-numeric value for pages", () => {
    const searchTerm = "Harry Potter";
    const genre = "Fantasy";
    const pages = "abc";

    const result = getBooks(searchTerm, genre, pages);

    expect(result).toEqual([]);
  });
});
