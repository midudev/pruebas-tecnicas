import { useState, useReducer, useEffect } from 'react';
import { InitialBookState, TBook } from './types';
import { bookReducer } from './booksReducer';

export const initialState: InitialBookState = {
  availableBooks: [],
  filteredBooks: [],
  lectureList: [],
  loading: false,
  error: null,
  genre: '',
};

function useBooks() {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  const getBooks = async () => {
    try {
      dispatch({ type: 'ACTION_START' });
      const response = await fetch('/books.json');
      const data = await response.json();
      dispatch({ type: 'GET_BOOKS', payload: data.library });
      dispatch({ type: 'ACTION_SUCCESS' });
    } catch (e: Error | any) {
      dispatch({ type: 'ACTION_ERROR', payload: e.message || "There was an error"});
    }
  };

  const filterBooksByGenre = (genre: string) => {
    dispatch({ type: 'SET_GENRE', payload: genre });
  };

  const addBookToLectureList = (book: TBook) => {
    dispatch({ type: 'ADD_BOOK_TO_LECTURE_LIST', payload: book });
    dispatch({ type: 'REMOVE_BOOK_FROM_AVAILABLE_BOOKS', payload: book });
    dispatch({ type: 'FILTER_BOOKS', payload: state.genre });
  };

  const addBookToAvailableBooks = (book: TBook) => {
    dispatch({ type: 'ADD_BOOK_TO_AVAILABLE_BOOKS', payload: book });
    dispatch({ type: 'REMOVE_BOOK_FROM_LECTURE_LIST', payload: book });
    dispatch({ type: 'FILTER_BOOKS', payload: state.genre });
  }

  useEffect(() => {
    dispatch({ type: 'FILTER_BOOKS', payload: state.genre });
  }, [state.genre]);

  useEffect(() => {
    getBooks();
  }, []);

  return { state, filterBooksByGenre, addBookToLectureList, addBookToAvailableBooks };
}

export default useBooks;
