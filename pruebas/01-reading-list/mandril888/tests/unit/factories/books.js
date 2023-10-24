import { Factory } from "fishery";
import { faker } from "@faker-js/faker";

const booksFactory = Factory.define(({ sequence }) => [
  {
    book: {
      title: faker.lorem.sentence(),
      pages: 694,
      genre: "Fantasía",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
      synopsis: faker.lorem.paragraph(),
      year: 1996,
      ISBN: sequence,
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
]);

export function generateBook(params) {
  return booksFactory.build(params);
}
