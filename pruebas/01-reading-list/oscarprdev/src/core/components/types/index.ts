import type { Writable } from "svelte/store";

export interface PaginationState {
    init: number;
    offset: number;
}

export interface BooksFilters {
    genre: string
  }