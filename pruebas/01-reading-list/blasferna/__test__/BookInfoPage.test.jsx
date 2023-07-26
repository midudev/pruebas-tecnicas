import BookInfoPage from "@/app/books/[isbn]/page";
import { AppProvider, FilterProvider } from "@/context/store";
import { render, screen } from "@testing-library/react";

describe("Book Info Page - Rendering", () => {
  it("should have heading element", () => {
    render(
      <FilterProvider>
        <AppProvider>
          <BookInfoPage params={{ isbn: "978-0441569595" }}></BookInfoPage>
        </AppProvider>
      </FilterProvider>,
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
