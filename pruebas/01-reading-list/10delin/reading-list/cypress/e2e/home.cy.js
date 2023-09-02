/* global describe, beforeEach, cy, it */

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should add one book to the reading books list", () => {
    cy.getBySel("available-book").first().click();
  });

  it("should remove one book from the reading book list", () => {
    cy.getBySel("available-book").first().click();
    cy.getBySel("remove-reading-book").first().click();
  });

  it("should add all books to the reading books list", () => {
    cy.getBySel("available-book").each((book) => {
      cy.wrap(book).click();
    });
  });

  it("should check the state of the books' prority", () => {
    cy.getBySel("available-book").eq(0).click();
    cy.getBySel("available-book").eq(1).click();
    cy.getBySel("available-book").eq(2).click();

    cy.getBySel("up-priority").eq(0).click();
    cy.getBySel("down-priority").eq(2).click();
  });

  it("should search for books with the search filter", () => {
    cy.getBySel("input-search").type("Harry Potter{enter}");
  });

  it("should search for books with the genre select filter", () => {
    cy.getBySel("select-genre").select("Zombies");
  });

  it("should simulate slider dragging", () => {
    const sliderHandleSelector = ".rc-slider-handle"; // Selector del slider handle

    cy.getBySel("input-pages").should("have.value", "600"); // Verificar el valor inicial

    // Obtener el slider handle y obtener su posición inicial
    cy.get(sliderHandleSelector).then(($handle) => {
      const initialPosition = $handle.position();

      // Mover el handle hacia la derecha (simula el arrastre hacia la derecha)
      cy.get(sliderHandleSelector)
        .trigger("mousedown")
        .trigger("mousemove", { pageX: initialPosition.left + 100 })
        .trigger("mouseup");

      cy.getBySel("input-pages").should("have.value", "0"); // Verificar que el valor ha cambiado
    });
  });
});
