import HomePage from "@/app/page";
import { AppProvider, FilterProvider } from "@/context/store";
import { render, screen } from "@testing-library/react";

describe("Home Page - Rendering", () => {
  it("should have filter element", () => {
    render(
      <FilterProvider>
        <AppProvider>
          <HomePage />
        </AppProvider>
      </FilterProvider>,
    );
    screen.getByRole("combobox");
  });
  it("should find input field by placeholder text Buscar por título o autor", () => {
    render(
      <FilterProvider>
        <AppProvider>
          <HomePage />
        </AppProvider>
      </FilterProvider>,
    );
    expect(
      screen.getByPlaceholderText(/Buscar por título o autor/),
    ).toBeInTheDocument();
  });
  it("should have element with text Ciencia ficción", () => {
    render(
      <FilterProvider>
        <AppProvider>
          <HomePage />
        </AppProvider>
      </FilterProvider>,
    );
    screen.getByText(/Ciencia ficción/);
  });
});
