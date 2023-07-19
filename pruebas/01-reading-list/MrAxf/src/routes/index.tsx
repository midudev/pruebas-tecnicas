import { component$ } from "@builder.io/qwik";
import { BookList } from "~/components/books/book-list";
import { BooksProvider } from "~/components/books/books-provider";

export default component$(() => {
  return (
    <BooksProvider>
      <BookList />
    </BooksProvider>
  );
});
