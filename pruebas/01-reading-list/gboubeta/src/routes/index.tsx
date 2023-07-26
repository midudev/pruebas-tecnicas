import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { ListsContainer } from "~/components/main/list-container";
import { useLibraryBooks } from "~/hooks/library-books";

export default component$(() => {
  const { bookListState } = useLibraryBooks();

  return (
    <div class="flex flex-col items-center justify-top gap-2 lg:gap-4 p-4 bg-slate-800 text-slate-200 min-h-screen">
      <header class="flex flex-col items-center justify-top gap-2">
        <h1 class="text-3xl">📚 Reading list</h1>
        {bookListState.readingList.length === 0 ? (
          <p class="px-4 py-1 bg-yellow-100/80 text-slate-900">
            Touch and hold a book to add it to the reading list
          </p>
        ) : (
          <p class="px-4 py-1 bg-yellow-100/80 text-slate-900">
            Touch and hold a book to toggle between lists
          </p>
        )}
      </header>
      <main>
        <ListsContainer />
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Reading list",
  meta: [
    {
      name: "description",
      content:
        "Desarrollo de una Aplicación de Lista de Libros (pruebastecnicas.com)",
    },
  ],
};
