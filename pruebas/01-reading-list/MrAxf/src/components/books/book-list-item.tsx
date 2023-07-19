import { $, component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { HStack, VStack, styled } from "~/styled-system/jsx";
import cutString from "~/utils/cutString";
import type { Book } from "~/types/books";
import { css, cx } from "~/styled-system/css";
import { Link } from "@builder.io/qwik-city";
import { bookCoverCss, bookTitleCss } from "~/styles/book";
import { BookFavIndicator } from "./book-fav-indicator";
import useBook from "~/hooks/useBook";

interface BookListItemProps {
  book: Book;
}

const imageCss = cx(
  bookCoverCss,
  css({
    sm: {
      w: "225px",
      h: "full",
    },
  })
);

const itemCss = css({
  cursor: "pointer",
  transitionProperty: "all",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-in-out",
  _hover: {
    bg: "neutral-focus",
    "& img": {
      saturate: "2",
    },
  },
});

export const BookListItem = component$(({ book }: BookListItemProps) => {
  const { isreadList, toogleFromMyList, readPriority, setReadPriority } =
    useBook(book);

  const cutStringWithDots = $(cutString);

  const onFavIndicatorInput = $((el: HTMLSelectElement) => {
    setReadPriority(Number(el.value) as 1 | 2 | 3);
  });
  return (
    <Link href={`/libro/${book.ISBN}`} title={book.title}>
      <HStack
        gap="5"
        bg="neutral"
        borderRadius="xl"
        p="4"
        h="full"
        position="relative"
        alignItems="start"
        class={itemCss}
        style={{
          viewTransitionName: `container-${book.ISBN}`,
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
        <VStack flexGrow="1" gap="5" alignItems="start">
          <BookFavIndicator
            isreadList={isreadList}
            readPriority={readPriority}
            onInput={onFavIndicatorInput}
            onFavButtonClick={toogleFromMyList}
            style={{
              viewTransitionName: `book-fav-indicator-${book.ISBN}`,
            }}
          />
          <h3
            class={bookTitleCss}
            style={{
              viewTransitionName: `title-${book.ISBN}`,
            }}
          >
            {book.title}
          </h3>
          <styled.p
            textAlign="justify"
            display="none"
            sm={{ display: "inline-block" }}
          >
            {cutStringWithDots(book.synopsis, 200)}
          </styled.p>
        </VStack>
      </HStack>
    </Link>
  );
});
