import { writable, type Writable } from "svelte/store";
import type { Book } from "../types";

interface InfoModal {
    isOpen: boolean,
    book: Book | null
}

interface RemoveModal {
    isOpen: boolean,
    book: Book | null
}

export interface Modal {
    infoModal: InfoModal,
    removeModal: RemoveModal
}

export const modalState: Writable<Modal> = writable({
    infoModal: {
        isOpen: false,
        book: null
    },
    removeModal: {
        isOpen: false,
        book: null
    }
});
