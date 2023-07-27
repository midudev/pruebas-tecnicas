import { Book } from "@/models/book";
import { library } from "./get-library";

interface Args {
  genre: string;
  library: library;
  pages: string | null;
  search: string;
  readingList: Book[];
}

const filterLibrary = ({ library, genre, readingList, pages, search }: Args) =>
  library.filter(
    (item) =>
      item.book.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre === "" || item.book.genre.toLowerCase() === genre) &&
      !readingList.some((readingItem) => readingItem.ISBN === item.book.ISBN) &&
      (pages === null || item.book.pages < Number(pages))
  );

export default filterLibrary;
