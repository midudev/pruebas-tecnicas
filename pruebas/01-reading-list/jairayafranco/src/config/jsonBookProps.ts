import JSONBooks from '../../src/data/books.json'

interface JSONBook {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: {
        name: string;
        otherBooks: string[];
    }
}

export const newJSONBook = {
    library: [
        ...JSONBooks.library.map(({ book }: { book: JSONBook }, index) => ({
            book: {
                id: index + 1,
                title: book.title,
                pages: book.pages,
                genre: book.genre,
                cover: book.cover,
                synopsis: book.synopsis,
                year: book.year,
                ISBN: book.ISBN,
                author: {
                    name: book.author.name,
                    otherBooks: book.author.otherBooks
                }
            }
        }))
    ]
}