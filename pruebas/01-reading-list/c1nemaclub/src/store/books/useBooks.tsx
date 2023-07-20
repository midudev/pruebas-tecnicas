import { useReducer, useEffect } from 'react';
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
      const response = await fetch('/src/books.json');
      const data = await response.json();
      dispatch({ type: 'GET_BOOKS', payload: data.library });
      dispatch({ type: 'ACTION_SUCCESS' });
    } catch (e: unknown) {
      if (e instanceof Error)
        dispatch({
          type: 'ACTION_ERROR',
          payload: e.message || 'There was an error',
        });
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
  };

  useEffect(() => {
    const totalBooks = state.availableBooks.length + state.lectureList.length;
    if (totalBooks > 0) {
      saveToLocalStorage({
        availableBooks: state.availableBooks,
        lectureList: state.lectureList,
      });
    }
  }, [state.availableBooks, state.lectureList]);

  useEffect(() => {
    const savedData = getFromLocalStorage();
    if (savedData) {
      dispatch({ type: 'FILTER_BOOKS', payload: state.genre });
      dispatch({
        type: 'SET_AVAILABLE_BOOKS',
        payload: savedData.availableBooks,
      });
      dispatch({ type: 'SET_LECTURE_LIST', payload: savedData.lectureList });
    } else {
      getBooks();
    }

    window.addEventListener('storage', () => {
      const savedData = getFromLocalStorage();
      if (savedData) {
        dispatch({ type: 'FILTER_BOOKS', payload: state.genre });
        dispatch({
          type: 'SET_AVAILABLE_BOOKS',
          payload: savedData.availableBooks,
        });
        dispatch({ type: 'SET_LECTURE_LIST', payload: savedData.lectureList });
      }
    });
    return () => {
      window.removeEventListener('storage', () => {});
    };
  }, []);

  const saveToLocalStorage = (data: any) => {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem('books', serializedData);
    } catch (error: unknown) {
      if (error instanceof Error)
        dispatch({ type: 'ACTION_ERROR', payload: error.message });
      console.error('Error saving data to localStorage:', error);
    }
  };

  const getFromLocalStorage = () => {
    try {
      const serializedData = localStorage.getItem('books');
      return serializedData ? JSON.parse(serializedData) : null;
    } catch (error: unknown) {
      if (error instanceof Error)
        dispatch({ type: 'ACTION_ERROR', payload: error.message });
      console.error('Error retrieving data from localStorage:', error);
      return null;
    }
  };

  useEffect(() => {
    dispatch({ type: 'FILTER_BOOKS', payload: state.genre });
  }, [state.genre]);

  return {
    state,
    filterBooksByGenre,
    addBookToLectureList,
    addBookToAvailableBooks,
  };
}

export default useBooks;
