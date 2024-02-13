import responseBooks from "../data/books.json";
const booksBoxBlack = responseBooks.library.map(({ book }) => book)
function useBooks() {
  const booksHome = booksBoxBlack?.map((book) => ({
    title: book.title,
    titleTransform: book.title.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
    pages: book.pages,
    genreTransform: book.genre.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
    genreShow: book.genre,
    img: book.cover,
    synopsis: book.synopsis,
    year: book.year,
    id: book.ISBN,
    author: book.author,
    onSwitchCase:"",
  }));
  return { booksHome };
}
export default useBooks;