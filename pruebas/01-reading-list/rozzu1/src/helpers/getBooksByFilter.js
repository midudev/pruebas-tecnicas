export const getBooksByFilter = (books, genre, searchBook) => {
    let filteredBooks = genre
        ? books.filter(({ book }) => book.genre === genre)
        : books;

    if (searchBook) {
        const searchBookLowerCase = searchBook.toLowerCase();
        filteredBooks = filteredBooks.filter(
            ({ book }) =>
                book.title.toLowerCase().includes(searchBookLowerCase)
        );
    }

    return filteredBooks;
};