import { useReducer } from 'react';
import { createContext } from 'react';

export const ReadListContext = createContext();

const initialState = JSON.parse(window.localStorage.getItem('readList')) || [];

const updateLocalStorage = (state) => {
  window.localStorage.setItem('readList', JSON.stringify(state));
};

const reducer = (state, action) => {
  const { type: actionType, payload: actionPyload } = action;

  switch (actionType) {
    case 'ADD_TO_READ_LIST': {
      const { book } = actionPyload;
      const newState = [...state, book];
      updateLocalStorage(newState);
      return newState;
    }
    case 'REMOVE_FROM_READ_LIST': {
      const { ISBN } = actionPyload;
      const newState = state.filter((item) => item.ISBN !== ISBN);

      updateLocalStorage(newState);
      return newState;
    }
  }
  return state;
};

export function ReadListProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToReadList = (book) =>
    dispatch({ type: 'ADD_TO_READ_LIST', payload: book });

  const removeFromReadList = (book) =>
    dispatch({
      type: 'REMOVE_FROM_READ_LIST',
      payload: book,
    });

  return (
    <ReadListContext.Provider
      value={{ readList: state, addToReadList, removeFromReadList }}>
      {children}
    </ReadListContext.Provider>
  );
}
