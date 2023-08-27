import booksData from "./books.json";

export const getBooks = (searchTerm, genre, pages) => {
  const books = booksData.library;

  const filteredBooks = books.filter(({ book }) => {
    const hasGenre = genre === "all" || book.genre.includes(genre);
    const hasPages = book.pages <= pages;
    const hasSearchTerm =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.ISBN.toLowerCase().includes(searchTerm.toLowerCase());

    return hasGenre && hasPages && hasSearchTerm;
  });

  return filteredBooks;
};

export const getAllBooks = () => {
  const books = booksData.library;

  return books;
};

export const getBookMaxPages = () => {
  const books = booksData.library;

  const maxPages = books.reduce((max, { book }) => {
    return Math.max(max, book.pages);
  }, 0);

  return maxPages;
};

export const getBookGenres = () => {
  const books = booksData.library;

  const genres = books.reduce((genres, { book }) => {
    // Add the book genre to the genres array
    // Example: ["Fantasía", "Aventura", "Fantasía"]

    return genres.concat(book.genre);
  }, []);

  // Remove duplicate genres
  // Example: ["Fantasía", "Aventura", "Fantasía"] => ["Fantasía", "Aventura"]

  const uniqueGenres = [...new Set(genres)];

  return uniqueGenres;
};
