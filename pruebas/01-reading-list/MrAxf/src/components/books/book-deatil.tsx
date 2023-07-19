import { $, component$ } from "@builder.io/qwik";
import { HStack, VStack, styled } from "~/styled-system/jsx";
import { bookCoverCss, bookTitleCss } from "~/styles/book";
import type { Book } from "~/types/books";
import { BookFavIndicator } from "./book-fav-indicator";
import { Image } from "@unpic/qwik";
import useBook from "~/hooks/useBook";

interface BookDeatilProps {
    book: Book
}

export const BookDeatil = component$(({ book }: BookDeatilProps) => {
  const { isBookInMyList, readPriority, setReadPriority, toogleFromMyList } =
    useBook(book);

  const onFavIndicatorInput = $((el: HTMLSelectElement) => {
    setReadPriority(Number(el.value) as 1 | 2 | 3);
  });
  return (
    <HStack gap="5" alignItems="start" w="full">
      <Image
        aspectRatio="9/16"
        src={book.cover}
        width={225}
        alt="Portada del libro"
        class={bookCoverCss}
        style={{
          viewTransitionName: "cover",
        }}
      />
      <VStack alignItems="start" gap="4" flexGrow="1">
        <BookFavIndicator
          isBookInMyList={isBookInMyList}
          readPriority={readPriority}
          onInput={onFavIndicatorInput}
          onFavButtonClick={toogleFromMyList}
          style={{
            viewTransitionName: "book-fav-indicator",
          }}
        />
        <VStack alignItems="start" gap="0">
          <h3
            class={bookTitleCss}
            style={{
              viewTransitionName: "title",
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
    </HStack>
  );
});
