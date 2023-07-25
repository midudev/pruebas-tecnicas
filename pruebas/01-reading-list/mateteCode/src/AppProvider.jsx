import React, { useContext, useReducer } from "react";
const AppContext = React.createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const initialState = {
  loading: true,
  booksAvailable: [],
  booksToRead: [],
  genres: [],
  filter: {
    pages: {
      min: 0,
      max: 10000,
    },
    genre: "Todos",
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "RESET_STATE": {
      return initialState;
    }
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.value,
      };
    }
    case "SET_BOOKS_AVAILABLE": {
      return {
        ...state,
        booksAvailable: action.value,
      };
    }
    case "SET_BOOKS_TO_READ": {
      return {
        ...state,
        booksToRead: action.value,
      };
    }
    case "SET_GENRES": {
      return {
        ...state,
        genres: action.value,
      };
    }

    case "SET_PAGES": {
      return {
        ...state,
        filter: { ...state.filter, pages: action.value },
      };
    }

    case "SET_GENRE": {
      return {
        ...state,
        filter: { ...state.filter, genre: action.value },
      };
    }

    case "ADD_BOOK_TO_READ": {
      return {
        ...state,
        booksAvailable: state.booksAvailable.filter(
          (item) => item.book.ISBN !== action.value.book.ISBN
        ),
        booksToRead: [...state.booksToRead, action.value],
      };
    }
    case "REMOVE_BOOK_TO_READ": {
      return {
        ...state,
        booksAvailable: [...state.booksAvailable, action.value],
        booksToRead: state.booksToRead.filter(
          (item) => item.book.ISBN !== action.value.book.ISBN
        ),
      };
    }

    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        loading: state.loading,
        booksAvailable: state.booksAvailable,
        booksToRead: state.booksToRead,
        genres: state.genres,
        pages: state.filter.pages,
        genre: state.filter.genre,
        filter: state.filter,
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider, useAppContext };
