import { BookAction, InitialBookState } from './types';

export function bookReducer(state: InitialBookState, action: BookAction): InitialBookState {
  const { type } = action;

  switch (type) {
    case 'GET_BOOKS':
        return {...state, availableBooks: action.payload, filteredBooks: action.payload };
    case "FILTER_BOOKS":
        return {...state, filteredBooks: action.payload !== "" ? state.availableBooks.filter(book => book.book.genre === action.payload) : state.availableBooks}
    case "ADD_BOOK_TO_LECTURE_LIST":
        return {...state, lectureList: [...state.lectureList, action.payload]}
    case "ADD_BOOK_TO_AVAILABLE_BOOKS":
        return {...state, availableBooks: [...state.availableBooks, action.payload]}
    case "REMOVE_BOOK_FROM_AVAILABLE_BOOKS":
        return {...state, availableBooks: state.availableBooks.filter(book => book.book.ISBN !== action.payload.book.ISBN)}
    case "REMOVE_BOOK_FROM_LECTURE_LIST":
        return {...state, lectureList: state.lectureList.filter(book => book.book.ISBN !== action.payload.book.ISBN)}
    case "SET_GENRE":
        return {...state, genre: action.payload}
    case "SET_AVAILABLE_BOOKS":
        return {...state, availableBooks: action.payload}
    case "SET_LECTURE_LIST":
        return {...state, lectureList: action.payload}
    case 'ACTION_START':
        return { ...state, loading: true };
    case 'ACTION_SUCCESS':
        return { ...state, loading: false };
    case 'ACTION_ERROR':
        return { ...state, loading: false, error: action.payload };
    case "SEARCH_BOOKS":
        return {...state, filteredBooks: action.payload !== "" ? state.availableBooks.filter(book => book.book.title.toLowerCase().includes(action.payload.toLowerCase())) : state.availableBooks}
    default:
        return state;
  }
}
