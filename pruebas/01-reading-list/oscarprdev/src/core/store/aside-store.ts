import { writable, type Writable } from "svelte/store";

export interface Aside {
  readingListIsOpen: boolean,
  topBooksListIsOpen: boolean
}

export const asideState: Writable<Aside> = writable({
  readingListIsOpen: false,
  topBooksListIsOpen: false
});