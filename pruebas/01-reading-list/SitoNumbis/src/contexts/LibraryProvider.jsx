/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useReducer, useContext } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const LibraryContext = createContext();

const libraryReducer = (libraryState, action) => {
  const { type } = action;
  switch (type) {
    case "toggle-to-reading-list": {
      const { id } = action;
      const { readingList } = libraryState;
      if (readingList[id]) delete readingList[id];
      else readingList[id] = id;
      return { ...libraryState, readingList };
    }
    case "init-books": {
      const { books } = action;
      const genres = Array.from(new Set(books.map((book) => book.genre)));
      const readingList = {};
      return { books, genres, readingList };
    }
    case "init-reading-list": {
      const { readingList } = libraryState;
      return { ...libraryState, readingList };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const LibraryProvider = ({ children }) => {
  const [libraryState, setLibraryState] = useReducer(libraryReducer, {
    books: [],
    genres: [],
    readingList: [],
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
