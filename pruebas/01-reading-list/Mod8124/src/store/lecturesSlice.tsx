import { StateCreator } from 'zustand';
import { IBooks } from '../interfaces/interfaces';
import { IbooksSlice } from './booksSlice';
import ListBooks from '../assets/books.json';

export interface IlecturesSlice {
  lectures: IBooks[];
  addLecture: (book: IBooks) => void;
  removeLecture: (book: IBooks) => void;
}

const storedLectures = localStorage.getItem('lectures');
const lectures = storedLectures !== null ? JSON.parse(storedLectures) : [];

export const lecturesSlice: StateCreator<IbooksSlice & IlecturesSlice, [], [], IlecturesSlice> = (
  set,
) => {
  const syncState = (state: any) => {
    localStorage.setItem('lectures', JSON.stringify(state.lectures));
    localStorage.setItem('books', JSON.stringify(state.books));
  };

  window.addEventListener('storage', (event) => {
    if (event.key === 'lectures' || event.key === 'books') {
      const storedLectures = localStorage.getItem('lectures');
      const lectures = storedLectures !== null ? JSON.parse(storedLectures) : [];

      const storedBooks = localStorage.getItem('books');
      const books = storedBooks !== null ? JSON.parse(storedBooks) : ListBooks.library;

      set({ lectures, books });
    }
  });

  return {
    lectures,
    removeLecture: (book: IBooks) =>
      set((state) => {
        const savedLectures = state.lectures.filter(
          (lecture) => lecture.book.title !== book.book.title,
        );

        const savedBooks = [...state.books, book];

        syncState({ ...state, lectures: savedLectures, books: savedBooks });

        return {
          lectures: savedLectures,
          books: savedBooks,
        };
      }),
    addLecture: (book: IBooks) =>
      set((state) => {
        const savedLectures = [...state.lectures, book];
        const savedBooks = state.books.filter((bk) => bk.book !== book.book);

        localStorage.setItem('lectures', JSON.stringify(state.lectures));
        localStorage.setItem('books', JSON.stringify(state.books));

        return {
          lectures: savedLectures,
          books: savedBooks,
        };
      }),
  };
};
