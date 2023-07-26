/* eslint-disable react/prop-types */
import { useReducer, createContext } from 'react';
import {
  readingListReducer,
  readingListInitialState,
} from '../reducers/reading-list.js';

export const ReadingListContext = createContext();

function useReadingListReducer() {
  const [state, dispatch] = useReducer(
    readingListReducer,
    readingListInitialState
  );

  const addToReadingList = (book) =>
    dispatch({
      type: 'ADD_TO_READING_LIST',
      payload: book,
    });

  const removeFromReadingList = (book) =>
    dispatch({
      type: 'REMOVE_FROM_READING_LIST',
      payload: book,
    });

  const clearReadingList = () => dispatch({ type: 'CLEAR_READING_LIST' });

  return { state, addToReadingList, removeFromReadingList, clearReadingList };
}

export function ReadingListProvider({ children }) {
  const { state, addToReadingList, removeFromReadingList, clearReadingList } =
    useReadingListReducer();

  return (
    <ReadingListContext.Provider
      value={{
        readingList: state,
        addToReadingList,
        removeFromReadingList,
        clearReadingList,
      }}
    >
      {children}
    </ReadingListContext.Provider>
  );
}
