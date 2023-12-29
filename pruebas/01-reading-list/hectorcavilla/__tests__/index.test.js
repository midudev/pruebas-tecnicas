import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

/* describe("Book Item", () => {
  test("it displays a list of books", async () => {
    render(<BookItem />);

    const button = screen.getByRole("button", {
      name: /Agregar a la lista/g,
    });

    expect(button).toBeInTheDocument();
  });
}); */

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Libros \(\d+\)/g,
    });

    expect(heading).toBeInTheDocument();
  });
});
