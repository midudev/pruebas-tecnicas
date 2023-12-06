use reading_list::models::{Author, Book, Data, Library};

pub fn get_data() -> Data {
    Data {
        library: vec![Library {
            book: Book {
                title: "El Señor de los Anillos".to_string(),
                pages: 1200,
                genre: "Fantasía".to_string(),
                cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg".to_string(),
                synopsis: "Una aventura épica en un mundo de fantasía llamado la Tierra Media.".to_string(),
                year: 1954,
                isbn: "978-0618640157".to_string(),
                author: Author {
                    name: "J.R.R. Tolkien".to_string(),
                    other_books: vec![
                        "El Hobbit".to_string(),
                        "El Silmarillion".to_string(),
                    ]
                },
                saved: false,
            },
        },
        Library {
            book: Book {
                title: "Juego de Tronos".to_string(),
                pages: 694,
                genre: "Fantasía".to_string(),
                cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg".to_string(),
                synopsis: "En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.".to_string(),
                year: 1996,
                isbn: "978-0553103540".to_string(),
                author: Author {
                    name: "George R. R. Martin".to_string(),
                    other_books: vec![
                        "Choque de Reyes".to_string(),
                        "Tormenta de Espadas".to_string(),
                        "Festín de Cuervos".to_string()
                    ]
                },
                saved: true,
            },
        },Library {
            book: Book {
                title: "Harry Potter y la piedra filosofal".to_string(),
                pages: 223,
                genre: "Fantasía".to_string(),
                cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg".to_string(),
                synopsis: "Un niño descubre que es un mago y comienza una aventura en una escuela de magia.".to_string(),
                year: 1997,
                isbn: "978-0747532699".to_string(),
                author: Author{
                    name: "J.K. Rowling".to_string(),
                    other_books: vec![
                        "Harry Potter y la cámara secreta".to_string(),
                        "Harry Potter y el prisionero de Azkaban".to_string(),
                        "Harry Potter y el cáliz de fuego".to_string()
                    ]
                },
                saved: false,
            },
        }
        ],
    }
}

pub fn get_books() -> Vec<Book> {
    get_data().library.iter().map(|l| l.book.clone()).collect()
}
