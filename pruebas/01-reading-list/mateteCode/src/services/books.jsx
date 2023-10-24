/* Fetchea todos los libros del .json */
const getBooks = async () => {
  try {
    const response = await fetch("/data/books.json");
    const data = await response.json();
    return data.library;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

/* Devuelve los libros de la lista de lectura*/
const getBooksToRead = () => {
  return JSON.parse(localStorage.getItem("booksToRead"));
};

/* Guarda los libros de la lista de lectura*/
const saveBooksToRead = (booksToRead) => {
  localStorage.setItem("booksToRead", JSON.stringify(booksToRead));
};

/* Devuelve los libros que disponibles que no estan en la lista de lectura y filtrados */
const getBooksAvailable = (books, filter = null) => {
  const booksToRead = getBooksToRead();
  if (booksToRead !== null && booksToRead.length !== 0) {
    books = books.filter(
      (item) =>
        !booksToRead.some(
          (excludedItem) => item.book.ISBN === excludedItem.book.ISBN
        )
    );
  }
  if (filter) {
    books = books.filter((item) => {
      if (filter.genre !== "Todos" && item.book.genre !== filter.genre) {
        return false;
      } else if (
        item.book.pages < filter.pages.min ||
        item.book.pages > filter.pages.max
      ) {
        return false;
      }
      return true;
    });
  }
  return books;
};

const getBooksData = (books) => {
  let genres = new Set();
  let maxPage;
  genres.add("Todos");
  books.forEach((item) => {
    genres.add(item.book.genre);
  });
  maxPage = Math.max(...books.map((item) => item.book.pages));

  genres = Array.from(genres);
  return { genres, maxPage };
};

export {
  getBooks,
  getBooksToRead,
  getBooksAvailable,
  saveBooksToRead,
  getBooksData,
};
