import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";
import BooksList from "@/components/BooksList.vue";
import { getAllBooks } from "@/services/booksRepository";
import { generateBook } from "./factories/books";

jest.mock("@/services/booksRepository");

describe("BooksList", () => {
  describe("when user loads the component", () => {
    it("should list books", async () => {
      const books = generateBook();

      getAllBooks.mockResolvedValueOnce(books);

      render(BooksList);

      const title = await screen.findByRole("heading", {
        name: books[0].book.title,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
