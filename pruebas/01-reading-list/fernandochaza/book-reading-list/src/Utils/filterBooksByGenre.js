export function filterBooksByGenre(books, genre) {
  const filteredBooks =
    genre === ''
      ? books
      : books.filter((book) =>
          book.volumeInfo.categories.some((category) =>
            category.toLowerCase().includes(genre)
          )
        )

  return filteredBooks
}
