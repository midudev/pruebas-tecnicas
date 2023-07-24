import type { Book } from "~/types"
import { BooksLibrary } from "./BooksLibrary"

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
        otherBooks: [
          "Choque de Reyes",
          "Tormenta de Espadas",
          "Festín de Cuervos"
        ]
      },
      isInReadingList: false
    }

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

  it("adds book to reading list on click", () => {
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
        otherBooks: [
          "Choque de Reyes",
          "Tormenta de Espadas",
          "Festín de Cuervos"
        ]
      },
      isInReadingList: false
    }

    cy.mount(
      <BooksLibrary
        initialBooks={[mockedBook]}
        initialFilter={"year"}
        initialGenre={"all"}
        initialReadingList={[]}
      />
    )

    cy.get("section button").click()

    cy.get("aside ul li div p").should("not.exist") // no "empty reading list" message when there are books in reading list

    cy.get("aside ul li button img").should(
      "have.attr",
      "src",
      mockedBook.cover
    )
  })

  it("removes book from reading list on click", () => {
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
        otherBooks: [
          "Choque de Reyes",
          "Tormenta de Espadas",
          "Festín de Cuervos"
        ]
      },
      isInReadingList: true
    }

    cy.mount(
      <BooksLibrary
        initialBooks={[mockedBook]}
        initialFilter={"year"}
        initialGenre={"all"}
        initialReadingList={[mockedBook]}
      />
    )

    cy.get("aside ul li button").click()

    cy.get("aside ul li div p").should(
      "contain.text",
      "No books in your reading list"
    )
  })

  it("filters books", () => {
    const mockedBooks: Book[] = [
      {
        title: "La llamada de Cthulhu",
        pages: 43,
        genre: "Terror",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485924654i/34094154.jpg",
        synopsis:
          "La historia de un monstruo ancestral que amenaza con revivir y dominar el mundo.",
        year: 2099,
        ISBN: "978-1542461690",
        author: {
          name: "H.P. Lovecraft",
          otherBooks: ["El horror de Dunwich", "En las montañas de la locura"]
        },
        isInReadingList: false
      },
      {
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
          otherBooks: [
            "Choque de Reyes",
            "Tormenta de Espadas",
            "Festín de Cuervos"
          ]
        },
        isInReadingList: false
      }
    ]

    cy.mount(
      <BooksLibrary
        initialBooks={mockedBooks}
        initialFilter={"pages"}
        initialGenre={"all"}
        initialReadingList={[]}
      />
    )

    // filter by pages
    cy.get("article div h6").contains(mockedBooks[1].title)
    cy.get("article div p").contains(mockedBooks[1].author.name)
    cy.get("article div span").contains(
      mockedBooks[1].genre.toLocaleLowerCase()
    )
    cy.get("article div ul li").contains(mockedBooks[1].pages)
    cy.get("article div ul li").contains(mockedBooks[1].year)
    cy.get("article div img").should("have.attr", "src", mockedBooks[1].cover)

    // filter by year
    cy.get("section label")
      .contains("Sort by")
      .siblings("select")
      .select("year")

    cy.get("article div h6").contains(mockedBooks[0].title)
    cy.get("article div p").contains(mockedBooks[0].author.name)
    cy.get("article div span").contains(
      mockedBooks[0].genre.toLocaleLowerCase()
    )
    cy.get("article div ul li").contains(mockedBooks[0].pages)
    cy.get("article div ul li").contains(mockedBooks[0].year)
    cy.get("article div img").should("have.attr", "src", mockedBooks[0].cover)
  })

  it("filters books by genre", () => {
    const mockedBooks: Book[] = [
      {
        title: "El resplandor",
        pages: 688,
        genre: "Terror",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641398308i/60038757.jpg",
        synopsis:
          "Una familia se muda a un hotel aislado para el invierno donde una presencia siniestra influye en el padre hacia la violencia.",
        year: 1977,
        ISBN: "978-0307743657",
        author: {
          name: "Stephen King",
          otherBooks: ["Carrie", "It"]
        },
        isInReadingList: false
      },
      {
        title: "Drácula",
        pages: 418,
        genre: "Terror",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg",
        synopsis:
          "La historia del infame conde Drácula y su intento de mudarse de Transilvania a Inglaterra.",
        year: 1897,
        ISBN: "978-0486411095",
        author: {
          name: "Bram Stoker",
          otherBooks: [
            "La joya de las siete estrellas",
            "La madriguera del gusano blanco"
          ]
        },
        isInReadingList: false
      },
      {
        title: "Neuromante",
        pages: 271,
        genre: "Ciencia ficción",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg",
        synopsis:
          "Una visión profética de la ciber-realidad y la inteligencia artificial.",
        year: 1984,
        ISBN: "978-0441569595",
        author: {
          name: "William Gibson",
          otherBooks: ["Conde Cero", "Mona Lisa Acelerada"]
        },
        isInReadingList: false
      },
      {
        title: "Fahrenheit 451",
        pages: 249,
        genre: "Ciencia ficción",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg",
        synopsis:
          "Una sociedad futura donde los libros están prohibidos y 'bomberos' queman cualquier libro que encuentren.",
        year: 1953,
        ISBN: "978-1451673319",
        author: {
          name: "Ray Bradbury",
          otherBooks: ["Crónicas marcianas", "El hombre ilustrado"]
        },
        isInReadingList: false
      }
    ]

    cy.mount(
      <BooksLibrary
        initialBooks={mockedBooks}
        initialFilter={"year"}
        initialGenre={"all"}
        initialReadingList={[]}
      />
    )

    // filter by genre "fantasy"
    cy.get("section label")
      .contains("Genres")
      .siblings("select")
      .select("fantasy")

    cy.get("section section").should("not.contain.html") // no books in fantasy genre

    // filter by genre "horror"
    cy.get("section label")
      .contains("Genres")
      .siblings("select")
      .select("horror")

    cy.get("article div span").contains("sci-fi").should("not.exist") // no books in sci-fi genre when "horror" genre is selected

    cy.get("article div span").contains("terror")
  })
})
