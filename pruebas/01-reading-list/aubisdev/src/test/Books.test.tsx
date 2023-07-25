import { describe, expect, afterEach, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Books } from "../components";

describe("<App />", () => {
  afterEach(cleanup);

  it("should render", (): void => {
    render(<Books />);
  });

  it("Should render all 13 books ", (): void => {
    render(<Books />);
    const books = screen.getAllByRole("book-item");
    expect(books.length).toBe(13);
  });
});
