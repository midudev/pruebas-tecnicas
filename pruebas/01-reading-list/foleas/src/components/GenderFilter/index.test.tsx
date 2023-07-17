import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import PageFilter from ".";

describe("Genre Filter", () => {
  test("Should render genre filter input", () => {
    render(<PageFilter />);

    screen.getByLabelText("Filtrar por Género");
  });
});
