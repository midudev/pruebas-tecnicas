import books from "../data/books.json";

const useBooks = () => {
    const library = books.library;
    const booksList = library.map((book) => book.book);

    return booksList;
}

export default useBooks;