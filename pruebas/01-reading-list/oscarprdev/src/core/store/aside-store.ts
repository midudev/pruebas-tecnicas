import { writable, type Writable } from "svelte/store";

export interface Aside {
  isOpen: boolean
}

export const asideState: Writable<Aside> = writable({
  isOpen: false,
});