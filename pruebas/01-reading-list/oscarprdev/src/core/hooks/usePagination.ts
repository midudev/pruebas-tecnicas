import { derived, type Writable } from "svelte/store";
import type { Book } from "../types";
import type { PaginationState } from "../components/types";
import type { Readable } from "svelte/motion";

export const usePagination = (booksFiltered: Readable<Book[]>, paginationState: Writable<PaginationState>): Readable<Book[]> => {
    return derived<
    [Readable<Book[]>, Writable<PaginationState>], Book[]>(
        [booksFiltered, paginationState], ([$booksFiltered, $paginationState]) => {
            return $booksFiltered.length > 4 ? $booksFiltered.slice($paginationState.init, $paginationState.offset) : $booksFiltered;
        }
    );
}