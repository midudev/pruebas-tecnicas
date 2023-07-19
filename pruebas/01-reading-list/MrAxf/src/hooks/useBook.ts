import type { Book } from "~/types/books";
import useReadList from "./useReadList";
import { $, useComputed$ } from "@builder.io/qwik";

export default function useBook(book: Book) {
  const _book = book;

  const booksInMyList = useReadList();

  const readPriority = useComputed$(() => booksInMyList.value[_book.ISBN]);

  const isreadList = useComputed$(() => {
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
    if (!isreadList.value) addBookToMyList();
    else deleteBookFromMyList();
  });

  const setReadPriority = $((value: 1 | 2 | 3) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (isreadList.value)
      booksInMyList.value = { ...booksInMyList.value, [_book.ISBN]: value };
  });
  return {
    isreadList,
    toogleFromMyList,
    readPriority,
    setReadPriority,
  };
}
