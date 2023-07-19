import type { Book } from "~/types/books";
import useReadList from "./useReadList";
import { $, useComputed$ } from "@builder.io/qwik";

export default function useBook(book: Book) {
  const _book = book;

  const readList = useReadList();

  const readPriority = useComputed$(() => readList.value[_book.ISBN]);

  const isreadList = useComputed$(() => {
    return Boolean(readList.value[_book.ISBN]);
  });

  const addBookToMyList = $(() => {
    readList.value = { ...readList.value, [_book.ISBN]: 2 };
  });

  const deleteBookFromMyList = $(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [_book.ISBN]: removeIdtem, ...rest } = readList.value;
    readList.value = rest;
  });

  const toogleFromMyList = $(() => {
    if (!isreadList.value) addBookToMyList();
    else deleteBookFromMyList();
  });

  const setReadPriority = $((value: 1 | 2 | 3) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (isreadList.value)
      readList.value = { ...readList.value, [_book.ISBN]: value };
  });
  return {
    isreadList,
    toogleFromMyList,
    readPriority,
    setReadPriority,
  };
}
