import { StateCreator } from 'zustand';

export interface IFiltersSlice {
  filterByGenre: string;
  filterByPages: string;
  view: 'books' | 'lectures';
  search: string;
  sort: string;
  showFilter: boolean;

  changeView: (view: 'books' | 'lectures') => void;
  handleFilterByGenre: (filterByGenre: string) => void;
  handleFilterByPages: (filterByPages: string) => void;
  handleSort: (sort: string) => void;
  handleSearch: (search: string) => void;
  handleShowFilter: () => void;
}

export const filtersSlice: StateCreator<IFiltersSlice> = (set) => ({
  filterByGenre: '',
  filterByPages: '',
  view: 'books',
  search: '',
  sort: '',
  showFilter: true,
  changeView: (view: 'books' | 'lectures') => set(() => ({ view })),
  handleSearch: (search: string) => set(() => ({ search })),
  handleFilterByGenre: (filterByGenre: string) => set(() => ({ filterByGenre })),
  handleFilterByPages: (filterByPages: string) => set(() => ({ filterByPages })),
  handleSort: (sort: string) => set(() => ({ sort })),
  handleShowFilter: () => set((state) => ({ showFilter: !state.showFilter })),
});
