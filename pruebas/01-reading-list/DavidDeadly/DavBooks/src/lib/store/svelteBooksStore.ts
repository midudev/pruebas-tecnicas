import { readable } from 'svelte/store';
import type { StoreApi } from 'zustand';

type SveltStore = Pick<IBooks.NextStore, 'min' | 'max' | 'genres' | 'getNumAvaileblesBooks'>

const getSveltetore = ({ books, readingList }: IBooks.Store) => {
  const booksGenres = [...new Set(books.map(b => b.genre))];
  const bookPages = books.map(b => b.pages);

  const min = Math.min(...bookPages);
  const max = Math.max(...bookPages);
  const genres = booksGenres;

  const getNumAvaileblesBooks = (filteredBooks: IBook[]) => {
    return filteredBooks.filter(b => !readingList.includes(b.ISBN)).length
  };

  const store: SveltStore = {
    min,
    max,
    genres,
    getNumAvaileblesBooks
  }

  return store;
}

export function svelteBooksStore(zustandStore: StoreApi<IBooks.Store>) {
  const booksStore = zustandStore.getState();  
  const initialStore = getSveltetore(booksStore);
  
  const svelteStore = readable<IBooks.NextStore>({
    ...booksStore,
    ...initialStore
  }, set => {
    zustandStore.subscribe(booksStore => {
      const store = getSveltetore(booksStore)
      set({...booksStore, ...store})
    });
  });

  return {
    ...zustandStore,
    subscribe: svelteStore.subscribe
  };
}