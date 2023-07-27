// Enum para el campo "status"
export enum BookStatus {
    NOT_READ = "NOT_READ",
    IN_LIBRARY = "En Biblioteca",
    READING = "Leyendo",
    READ = "Leido",
}

// Interfaz para la revisión de un libro
export interface Review {
    id: number;
    user: string;
    rating: number;
    description: string;
}

// Interfaz para el autor de un libro
export interface Author {
    name: string;
    otherBooks: string[];
}

// Interfaz para un libro
export interface Book {
    status: BookStatus;
    book: {
        title: string;
        pages: number;
        genre: string;
        cover: string;
        synopsis: string;
        year: number;
        ISBN: string;
        author: Author;
    };
    reviews: Review[];
    stock: number;
    rating: number;
}

// Interfaz para la biblioteca que contiene arrays de libros
export interface Library {
    books: Book[];
}

export enum AtributoBook {
    TITLE = "title",
    GENRE = "genre",
    ISBN = "ISBN",
    AUTHOR = "author",
}

// Define un objeto que mapea las claves a los nombres legibles
export const AtributoBookNames: Record<AtributoBook, string> = {
    [AtributoBook.TITLE]: "Título",
    [AtributoBook.GENRE]: "Género",
    [AtributoBook.ISBN]: "ISBN",
    [AtributoBook.AUTHOR]: "Autor",
};

export interface Efecto {
    classLogo1: string;
    classLogo2: string;
    classLogo3: string;
    classButton1: string;
    classButton2: string;
};