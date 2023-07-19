export const useMappedBooks = (books: IReadingListBook[]) => {
  return books.filter(book => book.isInReadingList)
}
