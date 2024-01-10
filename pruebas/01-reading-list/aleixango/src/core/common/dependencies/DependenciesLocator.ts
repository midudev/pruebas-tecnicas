import { LocalStorageBookRepository } from "../../book/data/LocalStorageBookRepository"
import { LocalStorageBookListRepository } from "../../book/data/LocalStorageBookListRepository"
import { GetBooks } from "../../book/domain/use_cases/GetBooks"
import { AddBook } from "../../book/domain/use_cases/AddBook"
import { RemoveBook } from "../../book/domain/use_cases/RemoveBook"
import { BooksPloc } from "../../book/presentation/BooksPloc"
import { GetBooksFromList } from "../../book/domain/use_cases/GetBooksFromList"
import { AddBookToList } from "../../book/domain/use_cases/AddBookToList"
import { RemoveBookFromList } from "../../book/domain/use_cases/RemoveBookFromList"
import { BookListPloc } from "../../book/presentation/BookListPloc"

function provideBooksPloc(): BooksPloc {
  const bookRepository = new LocalStorageBookRepository()
  const getBooks = new GetBooks(bookRepository)
  const addBook = new AddBook(bookRepository)
  const removeBook = new RemoveBook(bookRepository)
  return new BooksPloc(getBooks, addBook, removeBook)
}

function provideBookListPloc(): BookListPloc {
  const bookListRepository = new LocalStorageBookListRepository()
  const getBooksFromList = new GetBooksFromList(bookListRepository)
  const addBookToList = new AddBookToList(bookListRepository)
  const removeBookFromList = new RemoveBookFromList(bookListRepository)
  return new BookListPloc(getBooksFromList, addBookToList, removeBookFromList)
}

export const dependenciesLocator = {
  provideBooksPloc,
  provideBookListPloc,
}
