import { ActionType, ReducerState } from '../types/books';
import { library } from '../mocks/library.json';

const mappedBooks = library.map((book) => ({
  id: book.book.ISBN,
  title: book.book.title,
  pages: book.book.pages,
  genre: book.book.genre,
  cover: book.book.cover,
  synopsis: book.book.synopsis,
  year: book.book.year,
  author: {
    name: book.book.author.name,
    otherBooks: book.book.author.otherBooks,
  },
}));

export const initialState: ReducerState = {
  books: JSON.parse(
    localStorage.getItem('books') || JSON.stringify(mappedBooks)
  ),
  readingList: JSON.parse(
    localStorage.getItem('readingList') || JSON.stringify([])
  ),
};

export const updateBookLocalStorage = (state: ReducerState) => {
  window.localStorage.setItem('books', JSON.stringify(state.books));
  window.localStorage.setItem('readingList', JSON.stringify(state.readingList));
};

export const reducer = (state: ReducerState, action: ActionType) => {
  switch (action.type) {
    case 'ADD_TO_READING_LIST': {
      const newState = {
        ...state,
        readingList: [...state.readingList, action.payload],
        books: state.books.filter((item) => item.id !== action.payload.id),
      };
      updateBookLocalStorage(newState);
      return newState;
    }
    case 'REMOVE_FROM_READING_LIST': {
      const newState = {
        ...state,
        readingList: state.readingList.filter(
          (item) => item.id !== action.payload.id
        ),
        books: [action.payload, ...state.books],
      };
      updateBookLocalStorage(newState);
      return newState;
    }
  }
};
