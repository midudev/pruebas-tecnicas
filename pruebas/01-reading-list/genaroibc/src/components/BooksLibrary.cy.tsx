import type { Book } from "~/types"
import { BooksLibrary } from "./BooksLibrary"

const mockedBook: Book = {
  title: "Juego de Tronos",
  pages: 694,
  genre: "Fantasía",
  cover:
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
  synopsis:
    "En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.",
  year: 1996,
  ISBN: "978-0553103540",
  author: {
    name: "George R. R. Martin",
    otherBooks: ["Choque de Reyes", "Tormenta de Espadas", "Festín de Cuervos"]
  },
  isInReadingList: false
}

describe("BooksLibrary", () => {
  it("renders message when there are no books in reading list", () => {
    cy.mount(
      <BooksLibrary
        initialBooks={[]}
        initialFilter={"year"}
        initialGenre={"all"}
        initialReadingList={[]}
      />
    )

    cy.get("aside ul li div p").should(
      "contain.text",
      "No books in your reading list"
    )
  })

  it("renders books in books list", () => {
    cy.mount(
      <BooksLibrary
        initialBooks={[mockedBook]}
        initialFilter={"year"}
        initialGenre={"all"}
        initialReadingList={[]}
      />
    )

    cy.get("article div h6").contains(mockedBook.title)
    cy.get("article div p").contains(mockedBook.author.name)
    cy.get("article div span").contains(mockedBook.genre.toLocaleLowerCase())
    cy.get("article div ul li").contains(mockedBook.pages)
    cy.get("article div ul li").contains(mockedBook.year)

    cy.get("article div img").should("have.attr", "src", mockedBook.cover)
  })
})
