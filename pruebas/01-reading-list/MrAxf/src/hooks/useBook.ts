import type { Book } from "~/types/books";
import useBooksInMyList from "./useBooksInMyList";
import { $, useComputed$ } from "@builder.io/qwik";

export default function useBook(book: Book) {
  const _book = book;

  const booksInMyList = useBooksInMyList();

  const readPriority = useComputed$(() => booksInMyList.value[_book.ISBN]);

  const isBookInMyList = useComputed$(() => {
    return Boolean(booksInMyList.value[_book.ISBN]);
  });

  const addBookToMyList = $(() => {
    booksInMyList.value = { ...booksInMyList.value, [_book.ISBN]: 2 };
  });

  const deleteBookFromMyList = $(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [_book.ISBN]: removeIdtem, ...rest } = booksInMyList.value;
    booksInMyList.value = rest;
  });

  const toogleFromMyList = $(() => {
    if (!isBookInMyList.value) addBookToMyList();
    else deleteBookFromMyList();
  });

  const setReadPriority = $((value: 1 | 2 | 3) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (isBookInMyList.value)
      booksInMyList.value = { ...booksInMyList.value, [_book.ISBN]: value };
  });
  return {
    isBookInMyList,
    toogleFromMyList,
    readPriority,
    setReadPriority,
  };
}
