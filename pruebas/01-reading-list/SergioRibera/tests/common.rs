mod services;
mod utils;

#[cfg(test)]
mod tests {

    use reading_list::{
        layout::check_book_saved,
        models::{Author, Book},
    };

    use super::utils::mock::get_books;

    #[test]
    fn book_not_saved_test() {
        let books = Vec::new();
        let book = Book {
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
            };

        assert_eq!(check_book_saved(&books, &book), false);
    }

    #[test]
    fn book_saved_test() {
        let books = get_books();
        let book = Book {
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
            }
            ;

        assert!(check_book_saved(&books, &book));
    }
}
