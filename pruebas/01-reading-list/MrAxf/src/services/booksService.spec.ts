import { describe, expect, test } from "vitest";
import { getBooks } from "./booksService";
import booksData from "~/content/books.json";

describe("Books Service Test", () => {
    test("Should booksService getBooks return an array", async () => {
        const books = await getBooks()
        
        expect(books).toBeInstanceOf(Array)
    })

    test("Should booksService getBooks return all books", async () => {
        const books = await getBooks()
        
        expect(books).toStrictEqual(booksData.library.map((item) => item.book))
    })
})