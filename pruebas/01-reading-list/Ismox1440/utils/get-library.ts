import path from "path";
import fsPromises from "fs/promises";
import { Book } from "@/models/book";

export type library = libraryBook[];

type libraryBook = {
  book: Book;
};

const getLibrary = async (): Promise<library> => {
  const filePath = path.join(process.cwd(), "../books.json");
  const jsonData = (await fsPromises.readFile(filePath)).toString();
  return await JSON.parse(jsonData).library;
};

export default getLibrary;
