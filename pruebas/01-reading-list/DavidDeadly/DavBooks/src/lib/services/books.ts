import booksResponse from "$lib/mocks/books.json";

export function getAllBooks(): BooksResponse {
  return booksResponse;
}

export function mapBookResponse({ response }: { response: BooksResponse }): IBook[] {
  return response.library.map(shelf => shelf.book);
}
