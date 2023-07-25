/* global describe, beforeEach, cy, it */

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should add one book to the reading books list", () => {
    cy.getBySel("avaliable-book").first().click();
  });

  it("should remove one book from the reading book list", () => {
    cy.getBySel("avaliable-book").first().click();
    cy.getBySel("remove-reading-book").first().click();
  });

  it("should add all books to the reading books list", () => {
    cy.getBySel("avaliable-book").each((book) => {
      cy.wrap(book).click();
    });
  });

  it("should check the state of the books' prority", () => {
    cy.getBySel("avaliable-book").eq(0).click();
    cy.getBySel("avaliable-book").eq(1).click();
    cy.getBySel("avaliable-book").eq(2).click();

    cy.getBySel("up-priority").eq(0).click();
    cy.getBySel("down-priority").eq(2).click();
  });

  it("should search for books with the search filter", () => {
    cy.getBySel("input-search").type("Harry Potter");
    cy.getBySel("button-search").click();
  });

  it("should search for books with the genre select filter", () => {
    cy.getBySel("select-genre").select("Zombies");
  });

  it("should search for books with the number pages filter", () => {
    cy.getBySel("input-pages").type("400");
    cy.getBySel("button-pages").click();
  });
});
