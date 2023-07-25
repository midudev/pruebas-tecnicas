import { render, screen } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";
import preview from "vitest-preview";

import { App } from "../app";

test.only("filtro libros", async () => {
  const user = userEvent.setup();

  render(<App />);

  screen.queryByText(/harry potter/i);

  const sInput = screen.getByRole("textbox", {
    name: /inputsearch/i,
  });

  await user.type(sInput, "El señor de los Anillos");

  screen.getByText(/el señor de los anillos/i);
  expect(screen.queryByText(/harry potter/i)).toBeNull();

  preview.debug();
});
