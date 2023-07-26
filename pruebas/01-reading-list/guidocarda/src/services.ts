import data from "./books.json";

export const getBooks = () => {
  return data.library.map((item) => item.book);
};
