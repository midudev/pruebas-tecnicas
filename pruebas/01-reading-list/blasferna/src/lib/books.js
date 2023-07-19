import DATA from "@/books.json";

const READING_LIST_STORAGE_KEY = "readingList";

const groupByGenre = (data) => {
  return data.reduce((groups, item) => {
    const genre = item.book.genre;
    if (!groups[genre]) {
      groups[genre] = [];
    }
    groups[genre].push(item.book);
    return groups;
  }, {});
};

const getInReadingList = () => {
  if (typeof window !== "undefined") {
    return (
      JSON.parse(localStorage.getItem(READING_LIST_STORAGE_KEY) || "[]") || []
    );
  }
  return [];
};

const getReadingList = () => {
  const readingList = getInReadingList();
  const filteredList = DATA.library.filter((element) =>
    readingList.includes(element.book.ISBN)
  );
  return groupByGenre(filteredList);
};

const getReadingListCount = () => {
  return getInReadingList().length;
};

const getAvailableList = () => {
  const readingList = getInReadingList();
  const filteredList = DATA.library.filter(
    (element) => !readingList.includes(element.book.ISBN)
  );
  return groupByGenre(filteredList);
};

const getAvailableListCount = () => {
  return DATA.library.length - getInReadingList().length;
};

const isInReadingList = (isbn) => {
  const list = getInReadingList();
  return list.includes(isbn);
};

const addToReadingList = (isbn) => {
  const list = getInReadingList(isbn);
  list.push(isbn);
  localStorage.setItem(READING_LIST_STORAGE_KEY, JSON.stringify(list));
};

const removeFromReadingList = (isbn) => {
  const list = getInReadingList(isbn);
  const newList = list.filter((element) => element !== isbn);
  localStorage.setItem(READING_LIST_STORAGE_KEY, JSON.stringify(newList));
};

const getAuthorOtherBooks = (book) => {
  const otherBooks = [];
  const array = book.author.otherBooks;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    try {
      otherBooks.push(getByTitle(element));
    } catch (error) {}
  }
  return otherBooks;
};

const getByISBN = (isbn) => {
  return DATA.library.find((obj) => obj.book.ISBN === isbn).book;
};

const getByTitle = (title) => {
  return DATA.library.find((obj) => obj.book.title === title).book;
};

export {
  READING_LIST_STORAGE_KEY,
  addToReadingList,
  getAvailableList,
  getAvailableListCount,
  getInReadingList,
  getReadingList,
  getReadingListCount,
  groupByGenre,
  isInReadingList,
  removeFromReadingList,
  getAuthorOtherBooks,
  getByISBN,
  getByTitle,
};
