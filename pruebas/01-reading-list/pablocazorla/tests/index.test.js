import Home from "@/pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home rendered with all necessary components", () => {
  it("render Home", () => {
    render(<Home />);

    // check if all components are rendered
    expect(screen.getByTestId("main-header")).toBeInTheDocument();
    expect(screen.getByTestId("list-nav")).toBeInTheDocument();
    expect(screen.getByTestId("book-list-title")).toBeInTheDocument();
    expect(screen.getByTestId("filters")).toBeInTheDocument();
    expect(screen.getByTestId("book-list")).toBeInTheDocument();
  });
});
