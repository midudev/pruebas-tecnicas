import { component$ } from "@builder.io/qwik";
import {
  routeLoader$,
  type StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { BookDeatil } from "~/components/books/book-deatil";
import { getBooks } from "~/services/booksService";
import { Container } from "~/styled-system/jsx";
import type { Book } from "~/types/books";

export const useBookDetail = routeLoader$(
  async (requestEvent) =>
    getBooks().find((item) => item.ISBN === requestEvent.params.isbn) as Book
);

export default component$(() => {
  const book = useBookDetail();

  return (
    <Container mx="auto" bg="neutral" borderRadius="xl" p="4">
      <BookDeatil book={book.value} />
    </Container>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const books = await getBooks();

  return {
    params: books.map((book) => {
      return { isbn: book.ISBN };
    }),
  };
};
