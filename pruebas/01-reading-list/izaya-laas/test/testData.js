const books = [
  {
    title: 'Fahrenheit 451',
    pages: 249,
    genre: 'Ciencia ficción',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg',
    synopsis:
      "Una sociedad futura donde los libros están prohibidos y 'bomberos' queman cualquier libro que encuentren.",
    year: 1953,
    ISBN: '978-1451673319',
    author: {
      name: 'Ray Bradbury',
      otherBooks: ['Crónicas marcianas', 'El hombre ilustrado'],
    },
  },
  {
    title: 'Drácula',
    pages: 418,
    genre: 'Terror',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg',
    synopsis:
      'La historia del infame conde Drácula y su intento de mudarse de Transilvania a Inglaterra.',
    year: 1897,
    ISBN: '978-0486411095',
    author: {
      name: 'Bram Stoker',
      otherBooks: [
        'La joya de las siete estrellas',
        'La madriguera del gusano blanco',
      ],
    },
  },
  {
    title: 'Frankenstein',
    pages: 280,
    genre: 'Terror',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg',
    synopsis:
      'Un científico obsesionado crea una criatura viva a partir de partes de cuerpos robadas, con consecuencias desastrosas.',
    year: 1818,
    ISBN: '978-0486282114',
    author: {
      name: 'Mary Shelley',
      otherBooks: ['El último hombre', 'Valperga'],
    },
  },
  {
    title: 'La llamada de Cthulhu',
    pages: 43,
    genre: 'Terror',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485924654i/34094154.jpg',
    synopsis:
      'La historia de un monstruo ancestral que amenaza con revivir y dominar el mundo.',
    year: 1928,
    ISBN: '978-1542461690',
    author: {
      name: 'H.P. Lovecraft',
      otherBooks: ['El horror de Dunwich', 'En las montañas de la locura'],
    },
  },
];

//Libro 3 y 4 de books
const incluidedISBN = ['978-0486282114', '978-1542461690'];

const booksExcluided = [books[0], books[1]];
const terrorBooks = [books[1], books[2], books[3]];
const fictionBooks = [books[0]];
const booksMin300Pages = [books[1]];
const booksMax300Pages = [books[0], books[2], books[3]];
const booksMin40Max249Pages = [books[0], books[3]];

export {
  books,
  incluidedISBN,
  terrorBooks,
  fictionBooks,
  booksExcluided,
  booksMin300Pages,
  booksMax300Pages,
  booksMin40Max249Pages,
};
