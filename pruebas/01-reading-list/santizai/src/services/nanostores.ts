import { atom } from "nanostores";

export const selectedGenre = atom<string>("");

export const readingList = atom<string | null>(localStorage.getItem("books"));
