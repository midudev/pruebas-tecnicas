import { setActivePinia, createPinia } from "pinia";
import { useBooksStore } from "@/stores/BooksStore";
import { render, screen, fireEvent } from "@testing-library/vue";
import "@testing-library/jest-dom";
import BooksList from "@/components/BooksList.vue";
import { getAllBooks } from "@/services/booksRepository";
import { generateBook } from "./factories/books";

jest.mock("@/services/booksRepository");

describe("BooksList", () => {
  describe("when user loads the component", () => {
    describe("with bookAvailable type", () => {
      it("should list books availables", async () => {
        setActivePinia(createPinia());
        const books = generateBook();
        getAllBooks.mockResolvedValueOnce(books);

        render(BooksList, {
          props: { type: "bookAvailable", books: books },
        });

        const title = await screen.findByRole("heading", {
          name: books[0].book.title,
        });

        expect(title).toBeInTheDocument();
      });

      it("should not show a book when send it to read list", async () => {
        setActivePinia(createPinia());
        const books = generateBook();
        getAllBooks.mockResolvedValueOnce(books);

        render(BooksList, {
          props: { type: "bookAvailable", books: books },
        });

        const addButton = screen.getByRole("button", {
          name: /añadir/i,
        });

        await fireEvent.click(addButton);

        const title = screen.queryByText(books[0].book.title);

        expect(title).not.toBeInTheDocument();
      });
    });

    describe("with bookList type", () => {
      it("should add book to read list", async () => {
        setActivePinia(createPinia());
        const books = generateBook();
        const $booksStore = useBooksStore();
        getAllBooks.mockResolvedValueOnce(books);

        render(BooksList, {
          props: { type: "bookAvailable", books: books },
        });

        const addButton = screen.getByRole("button", {
          name: /añadir/i,
        });

        await fireEvent.click(addButton);

        render(BooksList, {
          props: { type: "bookList", books: $booksStore.booksList },
        });

        const title = await screen.findByRole("heading", {
          name: books[0].book.title,
        });

        expect(title).toBeInTheDocument();

        $booksStore.booksList = [];
      });

      it("should not show book when remove from read list", async () => {
        setActivePinia(createPinia());
        const books = generateBook();
        const $booksStore = useBooksStore();
        getAllBooks.mockResolvedValueOnce(books);

        render(BooksList, {
          props: { type: "bookAvailable", books: books },
        });

        const addButton = screen.getByRole("button", {
          name: /añadir/i,
        });

        await fireEvent.click(addButton);

        console.log($booksStore.booksList);

        render(BooksList, {
          props: { type: "bookList", books: $booksStore.booksList },
        });

        const removeButton = screen.queryByRole("button", {
          name: /quitar/i,
        });

        await fireEvent.click(removeButton);

        expect(removeButton).not.toBeInTheDocument();

        $booksStore.booksList = [];
      });
    });
  });
});
