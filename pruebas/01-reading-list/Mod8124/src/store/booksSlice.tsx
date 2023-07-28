import { StateCreator } from 'zustand';
import { IBooks } from '../interfaces/interfaces';
import { IlecturesSlice } from './lecturesSlice';
import ListBooks from '../assets/books.json';

export interface IbooksSlice {
  books: IBooks[];
}

const storedBooks = localStorage.getItem('books');
const books = storedBooks !== null ? JSON.parse(storedBooks) : ListBooks.library;

export const booksSlice: StateCreator<IbooksSlice & IlecturesSlice, [], [], IbooksSlice> = (
  set,
) => ({
  books,
});
