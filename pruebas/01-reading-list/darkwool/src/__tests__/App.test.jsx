/* globals describe, expect, it */
import App from "../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App.jsx", () => {
  it("renders two tabs, one for available books and the other for the reading list", () => {
    render(<App />);

    expect(screen.getByText(/libros disponibles/i)).toBeInTheDocument();
    expect(screen.getByText(/lista de lectura/i)).toBeInTheDocument();
  });

  it("must render a list of available books", () => {
    render(<App />);
    const listItems = screen.getAllByRole("listitem");

    expect(listItems.length).toBeGreaterThan(2);
  });

  it("must render a list of available books, each with a button to add them to the reading list", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button", {
      name: /agregar a lista de lectura/i,
    });

    buttons.forEach((btn) => {
      expect(btn).toBeInTheDocument();
      expect(btn).toBeVisible();
    });
  });

  it("should add the book to the 'reading list' tab when pressing the 'add to reading list' button", async () => {
    const user = userEvent.setup();

    render(<App />);
    const buttons = screen.getAllByRole("button", {
      name: /agregar a lista de lectura/i,
    });
    const readingListTab = screen.getByText(/lista de lectura/i);
    await user.click(buttons[0]);
    await user.click(readingListTab);

    expect(
      screen.getByRole("button", { name: /remover de la lista/i }),
    ).toBeInTheDocument();
  });

  it("should remove the book from the 'reading list' tab when pressing the 'remove from reading list' button", async () => {
    const user = userEvent.setup();

    render(<App />);
    await user.click(screen.getByText(/lista de lectura/i));
    await user.click(screen.getByRole("button", { name: /remover de la lista/i }));

    expect(
      screen.getByRole("button", { name: /remover de la lista/i }),
    ).not.toBeInTheDocument();
  });
});
