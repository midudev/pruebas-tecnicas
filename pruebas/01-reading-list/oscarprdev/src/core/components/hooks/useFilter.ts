import { derived, type Writable } from "svelte/store";
import type { Book, GlobalState } from "../../types";
import { appState } from "../../store/store";
import type { BooksFilters } from "../types";

export const useFilter = (filters: Writable<BooksFilters>) => {
    return derived<[Writable<GlobalState>, Writable<BooksFilters>], Book[]>(
      [appState, filters],
      ([$appState, $filters]) => {
        const { genre, title } = $filters;

        const booksFiltered = $appState.books.filter(book => {
            const genreMatch = !genre || book.genre === genre;
            const titleMatch = !title || book.title.toLowerCase().includes(title.toLowerCase());
  
          return genreMatch && titleMatch;
        });
  
        return booksFiltered;
      }
    );
  };

  
  
  
  