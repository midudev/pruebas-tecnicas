import { component$ } from "@builder.io/qwik";

import { AvailableBooks } from "../books/available-books";
import { ReadingList } from "../books/reading-list";

export const ListsContainer = component$(() => {
  return (
    <div class="flex flex-col-reverse lg:grid lg:grid-cols-4 xl:grid-cols-3 lg:gap-4 w-full">
      <div class="lg:col-span-3 xl:col-span-2">
        <AvailableBooks />
      </div>
      <div>
        <ReadingList />
      </div>
    </div>
  );
});
