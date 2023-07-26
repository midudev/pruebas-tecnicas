import { createContextId } from "@builder.io/qwik";
import type { Library } from "~/lib/types";

export interface LibraryBooksState {
  currentPage: number;
  isLoading: boolean;

  library: Library;
  readingList: Library;
}

export const LibraryBooksContext = createContextId<LibraryBooksState>(
  "library-books.context",
);
