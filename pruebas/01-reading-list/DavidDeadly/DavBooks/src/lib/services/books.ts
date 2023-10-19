import { NO_GENRES_FILTER } from "$lib/constants";
import booksResponse from "$lib/mocks/books.json";

export function getAllBooks(): BooksResponse {
  return booksResponse;
}

export function mapBookResponse({ response }: { response: BooksResponse }): IBook[] {
  return response.library.map(shelf => shelf.book);
}

export function getAllBooksMapped() {
  const response = getAllBooks(); 

  return mapBookResponse({ response });
}

export function getFilteredBooks(filters: IBooks.Filters ): IBook[] {
  const { maxPages: filterMaxPages, genre } = filters;

  const books = getAllBooksMapped();
  const maxPages = Math.max(...books.map(book => book.pages));
  
  const shouldIgnoreGenre = genre === NO_GENRES_FILTER;
  const shouldIgnorePages = maxPages === filterMaxPages;

  if(shouldIgnorePages && shouldIgnoreGenre) return books;

  const filteredBooks = books.filter(book => {
    const isBookInRange = book.pages <= filterMaxPages;

    if(!shouldIgnorePages && !shouldIgnoreGenre) {
      return book.genre === genre && isBookInRange;
    }

    if(shouldIgnorePages) {
      return book.genre === genre;
    }

    return isBookInRange;
  });

  return filteredBooks;
}
