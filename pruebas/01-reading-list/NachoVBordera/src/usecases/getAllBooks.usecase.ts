import * as books from "../../public/books.json";
import { Book } from "../types";

//TODO: Exportar un array solo con los libros para no tener que hacer book.loquesea
const getAllbooksUseCase = (): Book[] => {
  const allbooks = books;
  return allbooks.library;
};
export default getAllbooksUseCase;
