import { createSlice } from '@reduxjs/toolkit';
import { BookISBNType, type Book as BookType } from '../../../types';

interface BooksState {
  selectedBooks: BookISBNType[],
  filterObject: FilterObject,
  booksList: BookType[],
  availableList: BookType[],
  readingList: BookType[]
}
interface FilterObject {
  genre: string,
  pages: number,
}

const initialState: BooksState = {
  selectedBooks: [],
  filterObject: { genre: '', pages: 0 },
  booksList: [],
  availableList: [],
  readingList: [],
};

function handleUpdatingBooksList(state: BooksState) {
  updateReadingListfromSelectedBooks(state)
  updateAvailableListfromSelectedBooks(state)
}
function updateReadingListfromSelectedBooks(state: BooksState) {
  state.readingList = state.booksList.filter((book) => state.selectedBooks.includes(book.ISBN));
}
function updateAvailableListfromSelectedBooks(state: BooksState) {
  state.availableList = state.booksList.filter((book) => !state.selectedBooks.includes(book.ISBN));
}
function handlefilterBooks(state: BooksState) {
  if (state.filterObject.genre.length === 0) return
  state.availableList = state.availableList.filter(({ genre }) => genre === state.filterObject.genre);
}


export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooksList: (state, action) => {
      state.booksList = action.payload;
    },
    addSelectedBooks: (state, action) => {
      state.selectedBooks = [...state.selectedBooks, action.payload];
      handleUpdatingBooksList(state)
      handlefilterBooks(state)
    },
    removeSelectedBooks: (state, action) => {
      state.selectedBooks = state.selectedBooks.filter((ISBN) => ISBN !== action.payload);
      handleUpdatingBooksList(state)
      handlefilterBooks(state)

    },
    filterBooks: (state, action) => {
      state.filterObject.genre = action.payload;
      updateAvailableListfromSelectedBooks(state)
      handlefilterBooks(state)
    },
    setAvailableList: (state, action) => {
      state.availableList = action.payload;
    },
    setReadingList: (state, action) => {
      state.readingList = action.payload;
    },
  },
});


export const {
  addSelectedBooks,
  removeSelectedBooks,
  filterBooks,
  setBooksList,
  setAvailableList,
  setReadingList,
} = booksSlice.actions;