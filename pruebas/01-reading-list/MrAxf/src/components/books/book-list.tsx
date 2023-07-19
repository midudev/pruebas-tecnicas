import { component$ } from "@builder.io/qwik";
import { VStack } from "~/styled-system/jsx";
import { BookListItem } from "./book-list-item";
import { css } from "~/styled-system/css";
import { BookListFilters } from "./book-list-filters";
import type { BooksFilter } from "~/types/books";
import useBooks from "~/hooks/useBooks";

interface BookListProps {
  initialFilters?: BooksFilter;
  showPriorityOrder?: boolean;
}

const listGridCss = css({
  "--ideal-width": "20rem",
  w: "full",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(var(--ideal-width), 1fr))",
  gridAutoRows: "max-content",
  gap: "10",
  sm: {
    "--ideal-width": "35rem",
  },
});

export const BookList = component$<BookListProps>(
  ({ initialFilters = {}, showPriorityOrder = false }) => {
    const { books, filters, genres } = useBooks(initialFilters);

    return (
      <VStack>
        <BookListFilters
          filters={filters}
          genres={genres}
          showPriorityOrder={showPriorityOrder}
        />
        <div class={listGridCss}>
          {books.value.map((item) => (
            <BookListItem key={item.ISBN} book={item} />
          ))}
        </div>
      </VStack>
    );
  }
);
