import { server$ } from "@builder.io/qwik-city";

import { getValidatedData } from "./get-validated-data";

export const getBookMaxPages = server$(async () => {
  const validatedData = await getValidatedData();
  const pages = validatedData.library.map(({ book }) => {
    return book.pages;
  });
  return Math.max(...pages);
});
