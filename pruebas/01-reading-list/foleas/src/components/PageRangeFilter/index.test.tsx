import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import PageFilter from ".";

describe("Page Filter", () => {
  test("Should render page filter input", () => {
    render(<PageFilter />);

    screen.getByLabelText("Filtrar por páginas");
  });
});
