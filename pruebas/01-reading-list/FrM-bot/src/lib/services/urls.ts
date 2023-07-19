export const baseUrl = globalThis?.window?.location?.origin

export const APIPaths = {
  get: {
    books: '/api/books',
    book: (id: string) =>  `/api/book/${id}`,
    genres: '/api/genres'
  }
}
