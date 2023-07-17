import { derived, type Writable } from "svelte/store";
import type { Book, GlobalState } from "../../types";
import { appState } from "../../store/store";

export const useFilter = <T>(filters: Writable<T>) => {
    return derived<
    [Writable<GlobalState>, Writable<T>], Book[]>(
        [appState, filters], ([$appState, $filters]) => {
           let booksFiltered: Book[]

           Object.entries($filters).forEach(filter => {
                const key = filter[0]
                const value = filter[1]

                booksFiltered = $appState.books.filter(book => 
                    book[key].toLowerCase() === value.toLowerCase() 
                    || book[key].toLowerCase().includes(value.toLowerCase() )
            )
           });

           return booksFiltered.length > 0 ? booksFiltered : $appState.books
        }
    );
}