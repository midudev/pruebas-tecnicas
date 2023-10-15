import { createDOM } from "@builder.io/qwik/testing";
import { test, expect, beforeAll } from "vitest";
import { BookCard } from "./book-card";
import { AppDataSchema } from "~/lib/types.d";

import data from "../../../books.json";

const validatedData = AppDataSchema.parse(data);

/*
 * Playwright > Experimental: components
 *
 * https://playwright.dev/docs/test-components#q-i-cant-import-anything-other-than-the-components-from-tsxjsxcomponent-files
 * 
 * https://github.com/qwikifiers/playwright-ct-qwik
 */

test(`[BookCard Component]: Should render an image`, async () => {
  const { screen, render } = await createDOM();

  const book = validatedData.library[0].book;
  await render(<BookCard book={ book }/>);
  
  const img = screen.querySelector("img") as HTMLImageElement;
  expect(img.src).toBe(book.cover);
});