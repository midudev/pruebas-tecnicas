/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useReducer, useContext } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// config
import config from "../config";

const LibraryContext = createContext();

const libraryReducer = (libraryState, action) => {
  const { type } = action;
  switch (type) {
    case "toggle-to-reading-list": {
      const { id } = action;
      const { readingList } = libraryState;
      if (readingList.has(id)) readingList.delete(id);
      else readingList.set(id, id);
      // saving to local storage
      const obj = Object.fromEntries(libraryState.readingList);
      const stringify = JSON.stringify(Object.keys(obj));
      localStorage.setItem(config.readingList, stringify);
      return { ...libraryState, readingList };
    }
    case "init-books": {
      const { books, datetime } = action;
      const booksSet = Array.from(new Set(books));
      const genres = Array.from(new Set(books.map((book) => book.genre)));
      return {
        ...libraryState,
        books: booksSet,
        genres,
        seeing: "all",
        datetime,
      };
    }
    case "init-reading-list": {
      const { stringReadingList } = action;
      const obj = JSON.parse(stringReadingList);
      const newMap = new Map()
      // validating that it's an array
      if (typeof obj === "object" && obj.length) {
          
      }
      return { ...libraryState, readingList: parsedReadingList };
    }
    case "toggle-see": {
      return {
        ...libraryState,
        seeing: libraryState.seeing === "all" ? "reading-list" : "all",
      };
    }
    case "toggle-filter": {
      const { filtering } = action;
      return { ...libraryState, filtering };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const LibraryProvider = ({ children }) => {
  const [libraryState, setLibraryState] = useReducer(libraryReducer, {
    books: [],
    genres: [],
    readingList: new Map(),
    seeing: "all",
    datetime: 0,
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
