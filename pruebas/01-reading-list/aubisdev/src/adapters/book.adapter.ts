import { DnDBook } from "../components";
import { Book } from "../models";
import { v4 as uuidv4 } from "uuid";

export const adaptIdToBook = (book: Book): DnDBook => {
  const id: string = uuidv4();
  return {
    ...book,
    id,
  };
};
