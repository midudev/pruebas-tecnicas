import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

// provider
import { LanguageProvider } from "./contexts/LanguageProvider";
import { LibraryProvider } from "./contexts/LibraryProvider";
import { FiltersProvider } from "./contexts/FiltersProvider";

// app
import App from "./App";

// db
import db from "./books.json";

// init context books as Set to avoid repeated books
const setOfBooksLength = Array.from(new Set(db.library.map((book) => book.book))).length;

// external images
describe("Image load tests", () => {
  test("All images loaded", async () => {
    // render app
    render(
      <LanguageProvider>
        <LibraryProvider>
          <FiltersProvider>
            <App />
          </FiltersProvider>
        </LibraryProvider>
      </LanguageProvider>
    );
    const renderedImages = await screen.findAllByAltText(/Cover de */i);
    //  taking rendered images
    //* If there is an image with the class error-image is because it couldn't load
    const loaded = renderedImages.filter(
      (images) => images.className.indexOf("error-image") === -1
    );
    // asserting loaded images with set of books length
    expect(loaded.length).toEqual(setOfBooksLength);
  });
});
