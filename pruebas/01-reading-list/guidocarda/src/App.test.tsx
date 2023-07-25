import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  afterEach(cleanup);

  it("should render", () => {
    render(<App />);
  });

  it("should render title correctly", () => {
    render(<App />);
    screen.getByText("Biblioteca");
  });

  it("shoudn't render the reading list", () => {
    render(<App />);

    const readingList = document.querySelector(".readingList");

    expect(readingList).toBeFalsy();
  });
});
