import { BookStore, Filter } from "@/types";
import { getAvailableBooks } from ".";
import { adaptLibrary } from "@/adapters";
import library from "@/../../books.json";

describe('Books Actions', () => {
  test('should get an array of books', () => {
    const books = getAvailableBooks({} as BookStore, null);
    const booksMock = adaptLibrary(library);
    expect(books).toEqual(booksMock);
  });

  test('should get an array of books filtered by genre', () => {
    const genreFilter : Filter = { genero: 'Fantasy'}
    const books = getAvailableBooks({} as BookStore, [genreFilter]);
    const booksMock = adaptLibrary(library).filter(book => book.genre === 'Fantasy');
    expect(books).toEqual(booksMock);
  });

  test('should get an empty array of Books when genre doesn`t exist in collection', () => {
    const genreFilter : Filter = { genero: 'Not existing genre'}
    const books = getAvailableBooks({} as BookStore, [genreFilter]);
    expect(books).toEqual([]);
  });

  test('should get an empty array of Books when BookStore has all books', () => {
    const bookStoreMock: BookStore = adaptLibrary(library)
      .reduce((acc, book) => {
        acc[book.ISBN] = book;
        return acc;
      }, 
      {} as BookStore
    );

    const books = getAvailableBooks(bookStoreMock, null);
    expect(books).toEqual([]);
  });

  test('shouldn`t have "Juego de Tronos" in available books', () => {
    const book = adaptLibrary(library)
      .find(book => book.title === 'Juego de Tronos');

    const booksMock = adaptLibrary(library)
      .filter(book => book.title !== 'Juego de Tronos');

    const books = getAvailableBooks({
      [book?.ISBN as string]: book} as BookStore, 
      null
    );

    expect(books).toEqual(booksMock);
  });
});