export const mappedBooks = ({ books }) => {
  return books.map((item) => {
    return {
      title: item.book.title,
      cover: item.book.cover,
      ISBN: item.book.ISBN,
      genre: item.book.genre,
      pages: item.book.pages,
      sypnosis: item.book.synopsis,
      author: item.book.author.name,
      otherBooks: item.book.author.otherBooks,
      year: item.book.year,
      isSaved: item.book.isSaved ?? false
    }
  })
}
