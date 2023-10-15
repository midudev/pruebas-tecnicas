import { server$ } from "@builder.io/qwik-city";

import { getValidatedData } from "./get-validated-data";

export const getBookGenres = server$(async () => {
  const validatedData = await getValidatedData();
  const genres = validatedData.library.map(({ book }) => {
    return book.genre;
  });
  return [...new Set(genres)];
});
