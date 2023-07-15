export type InitialBookState = {
  availableBooks: TBook[];
  lectureList: TBook[];
  filteredBooks: TBook[];
  loading: boolean;
  error: string | null;
  genre: string;
};

export type TBook = {
  book: {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: Author;
  };
};

export type Author = {
  name: string;
  otherBooks: string[];
};

type ActionWithBookList = {
  type: 'GET_BOOKS';
  payload: TBook[];
};

type ActionWithBook = {
  type: 'ADD_BOOK_TO_LECTURE_LIST' | 'REMOVE_BOOK_FROM_AVAILABLE_BOOKS' | 'REMOVE_BOOK_FROM_LECTURE_LIST' | 'ADD_BOOK_TO_AVAILABLE_BOOKS';
  payload: TBook;
};

type ActionWithFilter = {
  type: 'FILTER_BOOKS';
  payload: string;
};

type ActionWithGenre = {
  type: 'SET_GENRE';
  payload: string;
};

type ActionStart = {
  type: 'ACTION_START';
};

type ActionSuccess = {
  type: 'ACTION_SUCCESS';
};

type ActionError = {
  type: 'ACTION_ERROR';
  payload: string;
};

export type BookAction =
  | ActionWithBookList
  | ActionStart
  | ActionError
  | ActionSuccess
  | ActionWithFilter
  | ActionWithBook
  | ActionWithGenre;
