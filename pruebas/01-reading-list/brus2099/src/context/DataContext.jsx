import { createContext } from "react";
import { useState, useEffect } from "react";
import { library } from "../assets/books.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [books, setBooks] = useState(library);
  const [booklist, setBooklist] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [lecturelist, setLecturelist] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  const updateTabs = new BroadcastChannel('update-tabs'); // this is a very importamnt line of code, don't forget to close the channel when you don't need it anymore

  const updateTabsWithBroadcastChannel = () => {
    updateTabs.postMessage('update');
  };

  useEffect(() => {
    updateTabs.addEventListener('message', (event) => {
      if (event.data === 'update') {
        setBooklist(createArrayOfBooks(parseItemFromLocalStorageToArray('booklist')));
        setLecturelist(createArrayOfBooks(parseItemFromLocalStorageToArray('lecturelist')));
      }
    });
  }, [booklist, lecturelist]);

  // parseItemFromLocalStorageToArray, addElementToLocalStorageItem and removeElementFromLocalStorageItem are used to manage localStorage items abtracting them as arrays
  const parseItemFromLocalStorageToArray = (item) => {
    if (!localStorage.getItem(item)) {
      return [];
    }
    const arrString = localStorage.getItem(item);
    const array = arrString.split(',');
    return array;
  };

  const addElementToLocalStorageItem = (element, item) => {
    const array = parseItemFromLocalStorageToArray(item);
    if (!array.includes(element)) {
      array.unshift(element);
      localStorage.setItem(item, array);
    }
  };

  const removeElementFromLocalStorageItem = (element, item) => {
    const array = parseItemFromLocalStorageToArray(item);
    if (array.includes(element)) {
      const index = array.indexOf(element);
      array.splice(index, 1);
      localStorage.setItem(item, array);
    }
  };

  // requestBookByISBN and createArrayOfBooks are used to create new arrays of books from an array of isbns
  const requestBookByISBN = (isbn) => {
    return books.find(({ book }) => book.ISBN === isbn);
  };

  const createArrayOfBooks = (arrIsbns) => {
    const newArrBooks = [];
    arrIsbns.forEach((isbn) => {
      newArrBooks.push(requestBookByISBN(isbn));
    });
    return newArrBooks;
  }

  useEffect(() => {
    if (!localStorage.getItem('booklist')) {
      localStorage.setItem('booklist', []);
    }
    if (!localStorage.getItem('lecturelist')) {
      localStorage.setItem('lecturelist', []);
    }

    const filteredBooklist = books.filter(({ book }) => {
      return !parseItemFromLocalStorageToArray('lecturelist').includes(book.ISBN);
    });
    const filteredIbns = filteredBooklist.map(({ book }) => book.ISBN);
    localStorage.setItem('booklist', filteredIbns);
    setBooklist(createArrayOfBooks(filteredIbns));
    setLecturelist(createArrayOfBooks(parseItemFromLocalStorageToArray('lecturelist')));
  }, []);

  // this const will be converted to an object of filters to be used in a more complex filter system
  const genres = [];
  genres.push('Todos');
  books.forEach(({ book }) => {
    if (!genres.includes(book.genre)) {
      genres.push(book.genre);
    }
  });

  return (
    <DataContext.Provider value={{
      books, genres,
      booklist, setBooklist,
      displayedBooks, setDisplayedBooks,
      lecturelist, setLecturelist,
      selectedGenre, setSelectedGenre,
      parseItemFromLocalStorageToArray,
      addElementToLocalStorageItem,
      removeElementFromLocalStorageItem,
      updateTabsWithBroadcastChannel,
    }}>
      {children}
    </DataContext.Provider>
  );
};