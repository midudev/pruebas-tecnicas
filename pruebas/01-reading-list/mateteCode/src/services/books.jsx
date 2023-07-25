const getAllBooks = async () => {
  try {
    const response = await fetch("/data/books.json");
    const data = await response.json();
    return data.library;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const getBooksToRead = () => {
  return JSON.parse(localStorage.getItem("booksToRead"));
};

const saveBooksToRead = (booksToRead) => {
  console.log("salvado");
  localStorage.setItem("booksToRead", JSON.stringify(booksToRead));
};

const getBooksAvailable = async () => {
  const booksToRead = getBooksToRead();
  try {
    const resp = await getAllBooks();
    if (booksToRead === null || booksToRead.length === 0) {
      return resp;
    } else {
      return resp.filter(
        (item) =>
          !booksToRead.some(
            (excludedItem) => item.book.ISBN === excludedItem.book.ISBN
          )
      );
    }
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const getBooksData = async () => {
  let genres = new Set();
  let maxPage;
  genres.add("Todos");
  try {
    const resp = await getAllBooks();
    resp.forEach((item) => {
      genres.add(item.book.genre);
    });
    maxPage = Math.max(...resp.map((item) => item.book.pages));
  } catch (err) {
    console.log(err.message);
  }
  genres = Array.from(genres);
  return { genres, maxPage };
};

export { getBooksAvailable, getBooksToRead, saveBooksToRead, getBooksData };
