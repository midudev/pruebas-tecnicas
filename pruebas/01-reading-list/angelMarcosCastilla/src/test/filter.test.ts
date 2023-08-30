import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";

import App from "../App.svelte";

test("should render button reading", () => {
  const app = render(App);

  // obtener el boton con el arial label de toggle reading
  const toggleReadingButton = app.getByLabelText("Abrir modal de lecturas");

  fireEvent.click(toggleReadingButton);

  // ver si aparece el texto de lecturas en la pantalla
  expect(screen.queryByText("lecturas")).toBeDefined();
});
