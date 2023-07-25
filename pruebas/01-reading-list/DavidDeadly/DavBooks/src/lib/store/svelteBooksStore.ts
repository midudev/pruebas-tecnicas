import { readable } from 'svelte/store';
import type { StoreApi } from 'zustand';
import { page } from '$app/stores';

import { getNumAvaileblesBooksFunction } from '$lib/helpers/getNumAvaileblesBooksFunction';

export function svelteBooksStore(zustandStore: StoreApi<IBooks.Store>) {
  const booksStore = zustandStore.getState();  

  const getNumAvaileblesBooks = getNumAvaileblesBooksFunction(booksStore);
  const initialSvelteState = {
    min: 0,
    max: 0,
    genres: [],
    getNumAvaileblesBooks
  }
  
  const svelteStore = readable<IBooks.NextStore>({
    ...initialSvelteState,
    ...booksStore,
  }, (_set, update) => {

    page.subscribe(({ data }) => {
      const books = data.books;
      const booksGenres = [...new Set(books.map(b => b.genre))];
      const bookPages = books.map(b => b.pages);
  
      const min = Math.min(...bookPages);
      const max = Math.max(...bookPages);
      const genres = booksGenres;
  
      update((store) => ({
        ...store,
        min, max, genres,
      }))
    })

    zustandStore.subscribe(async (booksStore) => {
      const newNumAvaileblesBooks = getNumAvaileblesBooksFunction(booksStore);

      update((store) => ({
        ...store,
        ...booksStore,
        getNumAvaileblesBooks: newNumAvaileblesBooks
      }))
    });
  });

  return {
    ...zustandStore,
    subscribe: svelteStore.subscribe
  };
}