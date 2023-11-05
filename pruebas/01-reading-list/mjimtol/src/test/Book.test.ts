import { test, expect } from "vitest"
import { pages } from "../utils/BookList"
import { Book } from "../types"

import books from "../../../books.json"

const BookMock: Book = books.library[0].book

test('Numero de paginas', () => {
    const book = {
        ...BookMock,
        pages: 30
    }

    expect(pages(book)).toBe(30)
})