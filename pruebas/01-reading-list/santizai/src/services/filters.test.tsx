import { filterForId, findBook, obtainGenres } from "./filters";

const books = [
    {
        book: {
            title: "El Señor de los Anillos",
            pages: 1200,
            genre: "Fantasía",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
            synopsis:
                "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
            year: 1954,
            ISBN: "978-0618640157",
            author: {
                name: "J.R.R. Tolkien",
                otherBooks: ["El Hobbit", "El Silmarillion"],
            },
        },
    },
    {
        book: {
            title: "Juego de Tronos",
            pages: 694,
            genre: "Fantasía",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
            synopsis:
                "En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.",
            year: 1996,
            ISBN: "978-0553103540",
            author: {
                name: "George R. R. Martin",
                otherBooks: [
                    "Choque de Reyes",
                    "Tormenta de Espadas",
                    "Festín de Cuervos",
                ],
            },
        },
    },
    {
        book: {
            title: "Harry Potter y la piedra filosofal",
            pages: 223,
            genre: "Fantasía",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg",
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
];

describe("filterForId function", () => {
    test("Debe filtrar los libros según si aparecen en la lista de lectura", () => {
        const filtereds = filterForId(["978-0618640157"], books);

        expect(filtereds.readList).toHaveLength(1);
        expect(filtereds.unread).toHaveLength(2);
    });
});

describe("findBook function", () => {
    test("Debe encontrar un libro por su ISBN", () => {
        const bookFound = findBook("978-0618640157", books);

        expect(bookFound).toBeTruthy();
    });
});

describe("obtainGenres function", () => {
    test("Debe retornar un array con todos los géneros disponibles", () => {
        const allGenres = ["Fantasía"];
        const genres = obtainGenres(books);

        expect(genres).toEqual(allGenres);
    });
});
