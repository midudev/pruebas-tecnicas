import { books } from "./database";
import {
  getBooksAvailableFromLocalStorage,
  getReadingListFromLocalStorage,
} from "./storage";

export const getBooksAvailable = () =>
  getBooksAvailableFromLocalStorage() ?? books;

export const getReadingList = () => getReadingListFromLocalStorage() ?? [];
