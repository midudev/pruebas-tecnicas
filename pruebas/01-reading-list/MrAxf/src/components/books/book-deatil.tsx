import { $, component$ } from "@builder.io/qwik";
import { Stack, VStack, styled } from "~/styled-system/jsx";
import { bookCoverCss, bookTitleCss } from "~/styles/book";
import type { Book } from "~/types/books";
import { BookFavIndicator } from "./book-fav-indicator";
import { Image } from "@unpic/qwik";
import useBook from "~/hooks/useBook";
import { css, cx } from "~/styled-system/css";

interface BookDeatilProps {
  book: Book;
}

export const BookDeatil = component$(({ book }: BookDeatilProps) => {
  const { isreadList, readPriority, setReadPriority, toogleFromMyList } =
    useBook(book);

  const onFavIndicatorInput = $((el: HTMLSelectElement) => {
    setReadPriority(Number(el.value) as 1 | 2 | 3);
  });

  const imageCss = cx(
    bookCoverCss,
    css({
      sm: {
        w: "auto",
        h: "33vh",
        flex: "0 0 auto",
      },
      md: {
        w: "auto",
        h: "65vh",
        flex: "0 0 auto",
      },
    })
  );
  return (
    <Stack
      gap="5"
      alignItems="start"
      w="full"
      flexDir="column"
      sm={{
        flexDir: "row",
      }}
    >
      <Image
        aspectRatio="9/14"
        src={book.cover}
        width={225}
        alt="Portada del libro"
        class={imageCss}
        style={{
          viewTransitionName: `cover-${book.ISBN}`,
        }}
      />
      <VStack alignItems="start" gap="4" flexGrow="1">
        <BookFavIndicator
          isreadList={isreadList}
          readPriority={readPriority}
          onInput={onFavIndicatorInput}
          onFavButtonClick={toogleFromMyList}
          style={{
            viewTransitionName: `book-fav-indicator-${book.ISBN}`,
          }}
        />
        <VStack alignItems="start" gap="0">
          <h3
            class={bookTitleCss}
            style={{
              viewTransitionName: `title-${book.ISBN}`,
            }}
          >
            {book.title}
          </h3>
          <styled.span fontSize="sm"> de {book.author.name}</styled.span>
        </VStack>
        <VStack alignItems="start" gap="0">
          <p>
            <b>Sinopsis:</b>
          </p>
          <styled.p textAlign="justify">{book.synopsis}</styled.p>
        </VStack>
        <p>
          <b>Género:</b> {book.genre}
        </p>
        <p>
          <b>Año de publicación:</b> {book.year}
        </p>
        <p>
          <b>Nº de páginas:</b> {book.pages}
        </p>
        <p>
          <b>ISBN:</b> {book.ISBN}
        </p>
        <VStack alignItems="start" gap="0">
          <p>
            <b>Otras obras del autor:</b>
          </p>
          <ul>
            {book.author.otherBooks.map((item) => (
              <li key={item}>&emsp;- {item}</li>
            ))}
          </ul>
        </VStack>
      </VStack>
    </Stack>
  );
});
