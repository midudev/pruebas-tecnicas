import { describe, expect, test } from "vitest";
import { filterBooks, getBooks, getGenres } from "./booksService";
import booksData from "~/content/books.json";
import { ReadList } from "~/types/books";

describe("Books Service Test", () => {
    test("Should booksService getBooks return an array", async () => {
        const books = await getBooks()
        
        expect(books).toBeInstanceOf(Array)
    })

    test("Should booksService getBooks return all books", async () => {
        const books = await getBooks()
        
        expect(books).toStrictEqual(booksData.library.map((item) => item.book))
    })

    test("Should booksService getGenres return an array", async () => {
        const genres = await getGenres()
        
        expect(genres).toBeInstanceOf(Array)
    })

    test("Should booksService getBooks return all genres", async () => {
        const genres = await getGenres()
        
        expect(genres).toStrictEqual(
            Array.from(booksData.library.map(
                (item) => item.book
            ).reduce(
                (acc: Set<string>, item) => {
                    acc.add(item.genre);
                    return acc;
                },
                new Set<string>()
            ))
        )
    })

    test("Should booksService filterBooks search books", async () => {
        expect(filterBooks({
            searchText: "sfsefsef"
        }, {})).toStrictEqual([])

        expect(filterBooks({
            searchText: "tokien"
        }, {}).at(0)?.ISBN).toBe("978-0618640157")

        expect(filterBooks({
            searchText: "el archivo"
        }, {}).at(0)?.ISBN).toBe("978-8466657662")

        expect(filterBooks({
            searchText: "978-0553103540"
        }, {}).at(0)?.ISBN).toBe("978-0553103540")
    })

    test("Should booksService filterBooks filter by books in read list", async () => {
        const readList: ReadList = {
            "978-0618640157": 2,
            "978-8466657662": 2,
            "978-0553103540": 2
        }

        expect(filterBooks({
            isInReadList: true
        }, readList)).toStrictEqual(
            getBooks().filter(
                item => Object.keys(readList).includes(item.ISBN)
            )
        )
    })

    test("Should booksService filterBooks filter by genre", async () => {
        let genre = "Fantasía"
        expect(filterBooks({
            genre
        }, {})).toStrictEqual(
            getBooks().filter(
                item => item.genre === genre
            )
        )

        genre = "Ciencia ficción"
        expect(filterBooks({
            genre
        }, {})).toStrictEqual(
            getBooks().filter(
                item => item.genre === genre
            )
        )

        genre = "Zombies"
        expect(filterBooks({
            genre
        }, {})).toStrictEqual(
            getBooks().filter(
                item => item.genre === genre
            )
        )
    })

    test("Should booksService filterBooks filter by minPages", async () => {
        let minPages = 0
        expect(filterBooks({
            minPages
        }, {})).toStrictEqual(
            getBooks().filter(
                item => item.pages >= minPages
            )
        )

        minPages = 500
        expect(filterBooks({
            minPages
        }, {})).toStrictEqual(
            getBooks().filter(
                item => item.pages >= minPages
            )
        )

        minPages = 1000
        expect(filterBooks({
            minPages
        }, {})).toStrictEqual(
            getBooks().filter(
                item => item.pages >= minPages
            )
        )
    })

    test("Should booksService filterBooks order by readList priority", async () => {
        const readList: ReadList = {
            "978-0618640157": 3,
            "978-8466657662": 2,
            "978-0553103540": 1
        }

        expect(filterBooks({
            priorityOrder: true,
            isInReadList: true
        }, readList)).toStrictEqual(
            getBooks().filter(
                item => Object.keys(readList).includes(item.ISBN)
            ).sort(
                (item1, item2) => -(readList[item1.ISBN] - readList[item2.ISBN])
            )
        )

        expect(filterBooks({
            priorityOrder: false,
            isInReadList: true
        }, readList)).toStrictEqual(
            getBooks().filter(
                item => Object.keys(readList).includes(item.ISBN)
            ).sort(
                (item1, item2) => readList[item1.ISBN] - readList[item2.ISBN]
            )
        )
    })
})