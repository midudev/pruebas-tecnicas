import { test, expect } from "vitest"
import { BookList, pages } from "../utils/BookList"
import { BookSelectable } from "../types"

import books from "../../../books.json"

const BookMock: BookSelectable = { ...books.library[0].book, selected: false, priority: 0 }

test('Bilbioteca', () => {
    const biblioteca: BookSelectable[] = [
        {
            ...BookMock,
            pages: 30
        },
        {    
            ...BookMock,
            pages: 150
        },
    ]

    expect(pages(BookList.LongestBook(biblioteca))).toBe(150)
})