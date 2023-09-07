import { createDOM } from "@builder.io/qwik/testing"
import { expect, test } from "vitest"
import { SearchBox } from "./search-box";

test(`[Searchbox component]: should render input element`, async () => {
  const { screen, render, userEvent } = await createDOM();

  await render(<SearchBox />);

  const inputElement = screen.querySelector('.input') as HTMLInputElement;

  expect(inputElement?.placeholder).toBe('laptops, smartphones, etc.');

  await userEvent(inputElement, "type", "smart");

  const form = screen.querySelector("form") as HTMLFormElement;
  await userEvent(form, "submit");

  const resultList = screen.querySelector("ul") as HTMLUListElement;

  expect(resultList).toBeTruthy();
})
