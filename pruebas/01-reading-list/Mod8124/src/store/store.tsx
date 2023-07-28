import { create } from 'zustand';
import { IFiltersSlice, filtersSlice } from './filtersSlice';
import { booksSlice, IbooksSlice } from './booksSlice';
import { lecturesSlice, IlecturesSlice } from './lecturesSlice';

export const useBooksStore = create<IbooksSlice & IlecturesSlice & IFiltersSlice>()((...state) => ({
  ...booksSlice(...state),
  ...lecturesSlice(...state),
  ...filtersSlice(...state),
}));
