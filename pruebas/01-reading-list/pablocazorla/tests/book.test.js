import Book from "@/components/book";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Book rendered with necessary components", () => {
  it("render Book with right data", () => {
    const data = {
      title: "El Señor de los Anillos",
      pages: 1200,
      genre: "Fantasía",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
      synopsis:
        "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
      year: 1954,
      ISBN: "978-0618640157",
      author: {
        name: "J.R.R. Tolkien",
        otherBooks: ["El Hobbit", "El Silmarillion"],
      },
    };

    const BookComponent = render(<Book data={data} />);

    BookComponent.getByText("El Señor de los Anillos");
    BookComponent.getByText("J.R.R. Tolkien");
    BookComponent.getByText(
      `${data.genre} - ${data.pages} páginas - ${data.year}`
    );
  });
});

describe("Home rendered with all necessary components", () => {
  it("On select book", () => {
    const data = {
      title: "El Señor de los Anillos",
      pages: 1200,
      genre: "Fantasía",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
      synopsis:
        "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
      year: 1954,
      ISBN: "978-0618640157",
      author: {
        name: "J.R.R. Tolkien",
        otherBooks: ["El Hobbit", "El Silmarillion"],
      },
    };

    const clickHandler = jest.fn();

    const BookComponent = render(
      <Book data={data} setSelectedBook={clickHandler} />
    );

    const image = BookComponent.getByAltText(
      `Portada del libro "${data.title}"`
    );

    fireEvent.click(image);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
