/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useReducer, useContext } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const LibraryContext = createContext();

const libraryReducer = (libraryState, action) => {
  const { type } = action;
  switch (type) {
    case "add-book": {
      const { id } = action;
      const { readingList, books } = libraryState;
      readingList[id] = books[id];
      delete books[id];
      return { readingList, books };
    }
    case "remove-book": {
      const { id } = action;
      const { readingList, books } = libraryState;
      books[id] = readingList[id];
      delete readingList[id];
      return { readingList, books };
    }
    case "init-books": {
      const { books } = action;
      return { books };
    }
    case "init-reading-list": {
      const { readingList } = libraryState;
      const { books } = libraryState;
      return { books, readingList };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const LibraryProvider = ({ children }) => {
  const [libraryState, setLibraryState] = useReducer(libraryReducer, {
    books: [],
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
