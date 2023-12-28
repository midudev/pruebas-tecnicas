/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useReducer, useContext } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// utils
import { saveReadingListToLocal } from "../utils/utils";

const LibraryContext = createContext();

/**
 *
 * @param {object} libraryState
 * @param {object} action
 * @returns
 */
const libraryReducer = (libraryState, action) => {
  const { type } = action;
  switch (type) {
    case "toggle-to-reading-list": {
      const { id } = action;
      let { available } = libraryState;
      const { readingList } = libraryState;
      // if exists delete it
      if (readingList.has(id)) {
        readingList.delete(id);
        // restore one book to the available counter
        ++available;
      } else {
        readingList.set(id, id);
        // remove one book from the available counter
        --available;
      }
      //* saving to local storage
      saveReadingListToLocal(libraryState.readingList);
      return { ...libraryState, readingList, available };
    }
    case "init-books": {
      const { books } = action;
      // init context books as Set to avoid repeated books
      const booksSet = Array.from(new Set(books));
      const bookDic = {};
      booksSet.forEach((book) => (bookDic[book.ISBN] = book));
      // same with genres
      const genres = Array.from(new Set(books.map((book) => book.genre)));
      return {
        ...libraryState,
        books: bookDic,
        genres,
        seeing: "all",
        available: booksSet.length,
      };
    }
    case "init-reading-list": {
      const { stringReadingList } = action;
      const obj = JSON.parse(stringReadingList);
      const newMap = new Map();
      // validating that it's an array
      if (typeof obj === "object" && obj.length)
        obj.forEach((item) => newMap.set(item, item));

      return {
        ...libraryState,
        readingList: newMap,
        available: libraryState.available - newMap.size,
      };
    }

    case "set-showing": {
      const { showing } = action;
      return { ...libraryState, showing };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const LibraryProvider = ({ children }) => {
  const [libraryState, setLibraryState] = useReducer(libraryReducer, {
    books: [],
    genres: [],
    readingList: new Map(), // Map because it can be iterable and has size attribute 🙂
    available: 0, // global state to quick access to available books
    showing: 0, // global state to quick access to the showing books
    seeing: "all", // books to show (all/reading-list)
  });

  const value = { libraryState, setLibraryState };
  return (
    <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
  );
};

LibraryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (context === undefined)
    throw new Error("libraryContext must be used within a Provider");
  return context;
};

export { LibraryProvider, useLibrary };
