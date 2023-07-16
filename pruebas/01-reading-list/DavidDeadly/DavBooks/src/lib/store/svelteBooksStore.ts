import { readable } from 'svelte/store';
import type { StoreApi } from 'zustand';

const getUpdatedState = ({ freeBooks, books }: {
  books: IBook[], freeBooks: FreeBook[]
}) => {
  const numFreeBooks = freeBooks
  .filter(book => book.free).length;

  const booksGenres = [...new Set(books.map(book => book.genre))];
  const booksPages = books.map(book => book.pages);
  const minPages = Math.min(...booksPages);
  const maxPages = Math.max(...booksPages);

  return {
    minPages,
    maxPages,
    booksGenres,
    numFreeBooks
  }
}

export function svelteBooksStore(zustandStore: StoreApi<IBooks.Store>) {
  const booksStore = zustandStore.getState();
  const state = getUpdatedState({
    books: booksStore.books,
    freeBooks: booksStore.freeBooks
  });
  
  const svelteStore = readable<IBooks.NextStore>({
    ...booksStore,
    ...state
  }, set => {
    zustandStore.subscribe(booksStore => {
      const { freeBooks, books } = booksStore;
      const state = getUpdatedState({
        books,
        freeBooks
      });

      set({
        ...booksStore,
        ...state
      })
    });
  });

  return {
    ...zustandStore,
    subscribe: svelteStore.subscribe
  };
}