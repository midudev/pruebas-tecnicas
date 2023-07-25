import { describe, afterEach, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  afterEach(cleanup);

  it("should render", (): void => {
    render(<App />);
  });

  it("should render title correctly", (): void => {
    render(<App />);
    screen.getByText("Welcome to");
    screen.getByText("The Library");
  });
});
