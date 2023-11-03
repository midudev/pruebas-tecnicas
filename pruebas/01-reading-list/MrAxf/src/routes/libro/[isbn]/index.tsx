import { component$ } from "@builder.io/qwik";
import {
  routeLoader$,
  type StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { BookDeatil } from "~/components/books/book-deatil";
import Button from "~/components/forms/button";
import { ChevronLeftIcon } from "~/components/icons/chevron-left";
import { getBooks } from "~/services/booksService";
import { css } from "~/styled-system/css";
import { Container } from "~/styled-system/jsx";
import type { Book } from "~/types/books";

export const useBookDetail = routeLoader$(
  async (requestEvent) =>
    getBooks().find((item) => item.ISBN === requestEvent.params.isbn) as Book
);

export default component$(() => {
  const book = useBookDetail();

  return (
    <Container
      mx="auto"
      bg="neutral"
      borderRadius="xl"
      p="4"
      style={{
        viewTransitionName: `container-${book.value.ISBN}`,
      }}
    >
      <Button
        onClick$={() => {
          history.back();
        }}
        mb="4"
        title="Volver"
      >
        <ChevronLeftIcon
          class={css({
            w: "1rem",
            h: "1rem",
          })}
        />{" "}
        Volver
      </Button>
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
