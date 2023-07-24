import { createContext, useState, useEffect, useMemo, useCallback } from "react";
import booksData from "../books.json";

export const bookContext = createContext(null);

const LOCAL_STORAGE_KEY = "readingList";

export const BooksProvider = ({ children }) => {
  const [library, setLibrary] = useState([]);
  const [readingList, setReadingList] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pages, setPages] = useState(0);
  const [title, setTitle] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [sortByPriority, setSortByPriority] = useState(false)

  const handleStorage = useCallback(() => {
    const savedReadingListData = localStorage.getItem(LOCAL_STORAGE_KEY);
    const savedLibraryData = localStorage.getItem('library')
    if (savedReadingListData) {
      const savedReadingList = JSON.parse(savedReadingListData);
      setReadingList(savedReadingList);
    }
    if(savedLibraryData) {
      const savedLibrary = JSON.parse(savedLibraryData);
      setLibrary(savedLibrary);
    }
  }, []);

  useEffect(() => {
    const { library } = booksData;
    setLibrary(library);
    setGenres([...new Set(library.map(({ book }) => book.genre))]);

    const savedReadingListData = localStorage.getItem("readingList");

    if (savedReadingListData) {
      const savedReadingList = JSON.parse(savedReadingListData);
      const setISBN = new Set(savedReadingList.map(({ book }) => book.ISBN));
      const newLibrary = library.filter(({ book }) => !setISBN.has(book.ISBN));
      setReadingList(savedReadingList);
      setLibrary(newLibrary);
    }

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [handleStorage]);

  const addBookToReadingList = useCallback(
    (data) => {
      const ISBN = data.ISBN;
      data = {
        ...data,
        priority: 1
      }
      const newReadingList = [...readingList, { book: data }];
      setReadingList(newReadingList);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newReadingList));
      
      const newLibrary = [...library].filter((b) => b.book.ISBN !== ISBN)
      setLibrary(newLibrary);
      localStorage.setItem('library', JSON.stringify(newLibrary))
    },
    [readingList]
  );

  const removeBookFromReadingList = useCallback(
    (data) => {
      const ISBN = data.ISBN;
      if(data.priority > -1) delete data.priority
      const newReadingList = [...readingList].filter((b) => b.book.ISBN !== ISBN);
      setReadingList(newReadingList);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newReadingList));

      const newLibrary = [...library, {book: data}]
      setLibrary(newLibrary);
      localStorage.setItem('library', JSON.stringify(newLibrary))
    },
    [readingList]
  );

  const filteredBooks = (books) => {
    let filteredBooks = [...books];

    if (selectedGenre !== "Todos") {
      filteredBooks = filteredBooks.filter(
        (item) => item.book.genre === selectedGenre
      );
    }

    filteredBooks = filteredBooks.filter((item) => item.book.pages > pages);
    filteredBooks = title ? filteredBooks.filter((item) => item.book.title.toLowerCase().includes(title.toLowerCase())) : filteredBooks

    return filteredBooks;
  }

  const filteredLibrary = useMemo(() => {
    return filteredBooks(library)
  }, [library, selectedGenre, pages, title]);

  const filteredReadingList = useMemo(() => {
    return filteredBooks(readingList)
  }, [readingList, selectedGenre, pages, title]);

  const sortReadingList = useMemo(() => {
  if (sortByPriority) return [...filteredReadingList].sort((a, b) => a.book.priority - b.book.priority)
  return filteredReadingList;
}, [filteredReadingList, sortByPriority]);

  const bookContextValue = {
    genres,
    selectedGenre,
    pages,
    filteredReadingList,
    sortReadingList,
    filteredLibrary,
    readingList,
    sortByPriority,
    setTitle,
    setGenres,
    setPages,
    setSortByPriority,
    setSelectedGenre,
    addBookToReadingList,
    removeBookFromReadingList,
    setReadingList
  };

  return (
    <bookContext.Provider value={bookContextValue}>
      {children}
    </bookContext.Provider>
  );
};
