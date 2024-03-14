import booksJSON from "./books.json";

export const getBooks = (/*params*/) => {
  // library
  //const { genre, pages } = params || {};

  const library = booksJSON.library
    // .filter((element) => {
    //   if (pages && pages < element.book.pages) {
    //     return false;
    //   }
    //   if (genre) {
    //     return genre === element.book.genre;
    //   }
    //   return true;
    // })
    .map((element) => {
      return element.book;
    });

  return library;
};
export const getFilters = () => {
  // genres
  const genresPool = {};

  booksJSON.library.forEach((element) => {
    if (!genresPool[element.book.genre]) {
      genresPool[element.book.genre] = 1;
    } else {
      genresPool[element.book.genre] += 1;
    }
  });

  const genres = Object.entries(genresPool).map(([name, count]) => {
    return { name, count };
  });

  // maxPages
  const maxPages = booksJSON.library
    .map((element) => element.book.pages)
    .reduce((a, b) => Math.max(a, b), -Infinity);

  return { genres, maxPages };
};
