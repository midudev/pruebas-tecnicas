import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { HStack, VStack, styled } from "~/styled-system/jsx";
import cutString from "~/utils/cutString";
import type { Book } from "~/types/books";
import { css, cx } from "~/styled-system/css";
import { useNavigate } from "@builder.io/qwik-city";
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
  const nav = useNavigate();

  const { isBookInMyList, toogleFromMyList, readPriority, setReadPriority } =
    useBook(book);

  const active = useSignal(false);

  const cutStringWithDots = $(cutString);

  useVisibleTask$(({ track }) => {
    track(() => active.value);
    if (active.value) nav(`/libro/${book.ISBN}`);
  });

  const onFavIndicatorInput = $((el: HTMLSelectElement) => {
    setReadPriority(Number(el.value) as 1 | 2 | 3);
  })
  return (
    <HStack
      gap="5"
      bg="neutral"
      borderRadius="xl"
      p="4"
      position="relative"
      alignItems="start"
      class={itemCss}
      onClick$={() => {
        active.value = true;
      }}
    >
      <Image
        aspectRatio="9/16"
        src={book.cover}
        width={225}
        alt="Portada del libro"
        class={imageCss}
        style={{
          viewTransitionName: active.value ? "cover" : undefined,
        }}
      />
      <VStack flexGrow="1" gap="5" alignItems="start">
        <BookFavIndicator
          isBookInMyList={isBookInMyList}
          readPriority={readPriority}
          onInput={onFavIndicatorInput}
          onFavButtonClick={toogleFromMyList}
          style={{
            viewTransitionName: active.value ? "book-fav-indicator" : undefined,
          }}
        />
        <h3
          class={bookTitleCss}
          style={{
            viewTransitionName: active.value ? "title" : undefined,
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
  );
});
