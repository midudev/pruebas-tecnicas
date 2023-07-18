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
  const { pages, genre } = filters;
  const books = getAllBooksMapped();
  
  const maxPages = Math.max(...books.map(book => book.pages));

  const isPagesFilterDisabled = !pages || maxPages === pages;
  if(isPagesFilterDisabled && !genre) return books;

  const filteredBooks = books.filter(book => {
    if(!isPagesFilterDisabled && genre) {
      const isBookInRange = book.pages <= pages;
      return book.genre === genre && isBookInRange;
    }

    if(isPagesFilterDisabled) {
      return book.genre === genre;
    }

    const isBookInRange = book.pages <= pages;
    return isBookInRange;
  });

  return filteredBooks;
}
