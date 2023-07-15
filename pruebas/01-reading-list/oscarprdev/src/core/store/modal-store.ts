import { writable, type Writable } from "svelte/store";
import type { Book } from "../types";

export interface Modal {
    isOpen: boolean,
    book: Book | null
}

export const modalState: Writable<Modal> = writable({
    isOpen: false,
    book: null
});
