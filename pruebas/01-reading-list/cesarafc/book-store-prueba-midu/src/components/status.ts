// interface Book {
//     title: string
//     pages: number 
//     genre: string
//     cover: string
//     synopsis: string
//     year: number
//     ISBN: string
//     author: Author
// }
// interface Author {
//     name: string
//     otherBooks: string[]
// }

// const books = [
//     {
//         "title": "El Señor de los Anillos",
//         "pages": 1200,
//         "genre": "Fantasía",
//         "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
//         "synopsis": "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
//         "year": 1954,
//         "ISBN": "978-0618640157",
//         "author": {
//             "name": "J.R.R. Tolkien",
//             "otherBooks": [
//                 "El Hobbit",
//                 "El Silmarillion"
//             ]
//         }
//     },
//     {
//         "title": "Juego de Tronos",
//         "pages": 694,
//         "genre": "Fantasía",
//         "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
//         "synopsis": "En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.",
//         "year": 1996,
//         "ISBN": "978-0553103540",
//         "author": {
//             "name": "George R. R. Martin",
//             "otherBooks": [
//                 "Choque de Reyes",
//                 "Tormenta de Espadas",
//                 "Festín de Cuervos"
//             ]
//         }
//     },
//     {
//         "title": "Harry Potter y la piedra filosofal",
//         "pages": 223,
//         "genre": "Fantasía",
//         "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg",
//         "synopsis": "Un niño descubre que es un mago y comienza una aventura en una escuela de magia.",
//         "year": 1997,
//         "ISBN": "978-0747532699",
//         "author": {
//             "name": "J.K. Rowling",
//             "otherBooks": [
//                 "Harry Potter y la cámara secreta",
//                 "Harry Potter y el prisionero de Azkaban",
//                 "Harry Potter y el cáliz de fuego"
//             ]
//         }
//     }
// ]

// function search (searchValue: string, bookList: Book[] ) {
//     let searchedTodos;
//     if( searchValue.length >= 1){
//         console.log('mayor a 1?')
//         searchedTodos = bookList;
//     } else {
//         searchedTodos = bookList.filter(book => {
//             const todoText = book.title.toLowerCase();
//             const searchText = searchValue.toLowerCase();
//             console.log(todoText.includes(searchText));
//             return todoText.includes(searchText);
//         });
//     }
    
// }

// const result = search('Harry', books);
// console.log("### ~ result:", result);

