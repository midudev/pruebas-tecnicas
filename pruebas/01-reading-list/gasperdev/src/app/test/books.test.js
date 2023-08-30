// Importamos Jest y los datos de los libros
const { test, expect } = require("@jest/globals");
const bookData = require("../../../books.json");

// Realizamos las pruebas
test("Los libros tienen los campos correctos", () => {
  bookData.library.forEach((book) => {
    const { title, pages, genre, cover, synopsis, year, ISBN, author } =
      book.book;
    expect(title).toBeDefined();
    expect(pages).toBeDefined();
    expect(genre).toBeDefined();
    expect(cover).toBeDefined();
    expect(synopsis).toBeDefined();
    expect(year).toBeDefined();
    expect(ISBN).toBeDefined();
    expect(author).toBeDefined();
    expect(author.name).toBeDefined();
    expect(author.otherBooks).toBeDefined();
  });
});
