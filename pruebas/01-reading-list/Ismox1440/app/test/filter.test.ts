import filterLibrary from "@/utils/filter-library";
import "@testing-library/jest-dom";
import { mockLibrary } from "../mock/library.mock";

describe("Filter", () => {
  it("filtrar libros por genero", () => {
    expect(
      filterLibrary({
        library: mockLibrary,
        genre: "zombies",
        readingList: [],
        pages: null,
        search: "",
      })
    ).toEqual([
      {
        book: {
          title: "Apocalipsis Zombie",
          pages: 444,
          genre: "Zombies",
          cover: "http://ficticio.com/portada3.jpg",
          synopsis:
            "Un gallego se queda en casa en pleno apocalipsis zombie y acaba casi salvando el mundo",
          year: 2001,
          ISBN: "978-4444532611",
          author: {
            name: "Manel Loreiro",
            otherBooks: [],
          },
        },
      },
    ]);
  });
  it("filtrar libros por titulo", () => {
    expect(
      filterLibrary({
        library: mockLibrary,
        genre: "",
        readingList: [],
        pages: null,
        search: "apocalipsis",
      })
    ).toEqual([
      {
        book: {
          title: "Apocalipsis Zombie",
          pages: 444,
          genre: "Zombies",
          cover: "http://ficticio.com/portada3.jpg",
          synopsis:
            "Un gallego se queda en casa en pleno apocalipsis zombie y acaba casi salvando el mundo",
          year: 2001,
          ISBN: "978-4444532611",
          author: {
            name: "Manel Loreiro",
            otherBooks: [],
          },
        },
      },
    ]);
  });
  it("filtrar libros por cantidad de paginas", () => {
    expect(
      filterLibrary({
        library: mockLibrary,
        genre: "",
        readingList: [],
        pages: "224",
        search: "",
      })
    ).toEqual([
      {
        book: {
          title: "Harry Potter y la piedra filosofal",
          pages: 223,
          genre: "Fantasía",
          cover: "http://ficticio.com/portada3.jpg",
          synopsis:
            "Un niño descubre que es un mago y comienza una aventura en una escuela de magia.",
          year: 1997,
          ISBN: "978-0747532699",
          author: {
            name: "J.K. Rowling",
            otherBooks: [
              "Harry Potter y la cámara secreta",
              "Harry Potter y el prisionero de Azkaban",
              "Harry Potter y el cáliz de fuego",
            ],
          },
        },
      },
    ]);
  });
});
