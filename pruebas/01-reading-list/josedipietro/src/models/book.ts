import Author from "./author";

export default class Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  sypnosis: string;
  year: number;
  ISBN: string;
  author: Author;
  reserved?: boolean;

  constructor(
    title: string,
    pages: number,
    genre: string,
    cover: string,
    sypnosis: string,
    year: number,
    ISBN: string,
    author: Author
  ) {
    this.title = title;
    this.pages = pages;
    this.genre = genre;
    this.pages = pages;
    this.cover = cover;
    this.sypnosis = sypnosis;
    this.year = year;
    this.ISBN = ISBN;
    this.author = author;
  }
}
