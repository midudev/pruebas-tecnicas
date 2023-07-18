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
    return JSON.parse(localStorage.getItem(READING_LIST_STORAGE_KEY) || "[]") || [];
  }
  return [];
};

const getReadingList = (data) => {
  const readingList = getInReadingList();
  const filteredList = data.library.filter((element) =>
    readingList.includes(element.book.ISBN)
  );
  return groupByGenre(filteredList);
};

const getReadingListCount = () => {
  return getInReadingList().length;
};

const getAvailableList = (data) => {
  const readingList = getInReadingList();
  const filteredList = data.library.filter(
    (element) => !readingList.includes(element.book.ISBN)
  );
  return groupByGenre(filteredList);
};

const getAvailableListCount = (data) => {
  return getAvailableList(data).length;
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
};
