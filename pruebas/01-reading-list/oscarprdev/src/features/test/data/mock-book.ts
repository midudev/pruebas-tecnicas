export const mockBook01 = {
  title: 'Harry Potter y la piedra filosofal',
  pages: 223,
  genre: 'Fantasía',
  cover:
    'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg',
  synopsis:
    'Un niño descubre que es un mago y comienza una aventura en una escuela de magia.',
  year: 1997,
  ISBN: '978-0747532699',
  author: {
    name: 'J.K. Rowling',
    otherBooks: [
      'Harry Potter y la cámara secreta',
      'Harry Potter y el prisionero de Azkaban',
      'Harry Potter y el cáliz de fuego',
    ],
  },
  stars: 0,
  isDone: false,
}

export const mockBook02 = {
  title: 'El Señor de los Anillos',
  pages: 1200,
  genre: 'Fantasía',
  cover:
    'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
  synopsis:
    'Una aventura épica en un mundo de fantasía llamado la Tierra Media.',
  year: 1954,
  ISBN: '978-0618640157',
  author: {
    name: 'J.R.R. Tolkien',
    otherBooks: ['El Hobbit', 'El Silmarillion'],
  },
  stars: 5,
  isDone: true,
}
