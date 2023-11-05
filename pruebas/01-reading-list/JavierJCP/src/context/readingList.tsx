import { createContext, useReducer } from 'react';
import { Book, ListOfBooks } from '../types/books';
import { initialState, reducer } from '../reducers/readingListReducer';

interface ReadingListContex {
  books: ListOfBooks;
  readingList: ListOfBooks;
  addToReadingList: (book: Book) => void;
  removeFromReadingList: (book: Book) => void;
}

interface Props {
  children: React.ReactNode;
}

export const ReadingListContext = createContext<ReadingListContex>(
  {} as ReadingListContex
);

export function ReadingListProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToReadingList = (book: Book) => {
    dispatch({ type: 'ADD_TO_READING_LIST', payload: book });
  };

  const removeFromReadingList = (book: Book) => {
    dispatch({ type: 'REMOVE_FROM_READING_LIST', payload: book });
  };

  return (
    <ReadingListContext.Provider
      value={{
        books: state.books,
        readingList: state.readingList,
        addToReadingList,
        removeFromReadingList,
      }}
    >
      {children}
    </ReadingListContext.Provider>
  );
}
