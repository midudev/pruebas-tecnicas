import { derived, type Writable } from "svelte/store";
import type { Book, GlobalState } from "../../types";
import { appState } from "../../store/app-state-store";
import type { BooksFilters } from "../types";

export const useFilter = (filters: Writable<BooksFilters>) => {
    return derived<[Writable<GlobalState>, Writable<BooksFilters>], Book[]>(
      [appState, filters],
      ([$appState, $filters]) => {
        const { genre, title, pages } = $filters;

        if(pages === 0) {
          return []
        }

        const booksFiltered = $appState.books.filter(book => {
            const genreMatch = !genre || book.genre === genre;
            const titleMatch = !title || book.title.toLowerCase().includes(title.toLowerCase());
            const pagesMatch = !pages || book.pages < pages 

          return genreMatch && titleMatch && pagesMatch;
        });
  
        return booksFiltered;
      }
    );
  };

  
  
  
  