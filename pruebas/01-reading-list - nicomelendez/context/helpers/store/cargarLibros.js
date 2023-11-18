import books from "@/data/books.json";

export function cargarLibros() {
    return books.library.map((item) => {
        const book = item.book;
        return {
            status: "Libre",
            book: book,
            reviews: [],
            stock: 10,
        };
    });
}