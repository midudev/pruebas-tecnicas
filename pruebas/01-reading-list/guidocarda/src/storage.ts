import { Book } from "./App";

export const getLocalStorage = (key = "readingList") => {
  const data =
    (JSON.parse(window.localStorage.getItem(key) as string) as null | Book[]) ??
    [];

  return data;
};

export const setLocalStorage = (key = "readingList", value: Book[]) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
