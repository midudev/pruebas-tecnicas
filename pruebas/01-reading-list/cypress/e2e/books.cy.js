describe("Adding and Removing functions", () => {
  beforeEach(() => {
    // Visito la página
    cy.visit("/");
    // Obtengo el catálogo y mi lista
    cy.get('[data-cy="catalogue-list"]').as("catalogue-list");
    cy.get('[data-cy="my-list"]').as("my-list");
  });

  it("Add book from catalogue to my list", () => {
    // Verifico el estado inicial
    cy.get("@catalogue-list").children().should("have.length", 13);
    cy.get("@my-list").children().should("have.length", 0);

    // Agrego el primer libro a mi lista
    cy.get("@catalogue-list").first().contains("Add").as("add-btn");
    cy.get("@add-btn").click();

    // Verifico que se haya agregado
    cy.get("@catalogue-list").children().should("have.length", 12);
    cy.get("@my-list").children().should("have.length", 1);
    cy.get("@my-list").first().contains("1984");
    cy.get("@my-list").first().contains("George Orwell");
  });

  it("Remove book from my list to catalogue", () => {
    // Agrego el primer libro a mi lista
    cy.get("@catalogue-list").first().contains("Add").as("add-btn");
    cy.get("@add-btn").click();

    // Verifico el estado de mi lista
    cy.get("@my-list").children().should("have.length", 1);

    // Remuevo el elemento
    cy.get("@my-list").first().contains("Remove").as("remove-btn");
    cy.get("@remove-btn").click();

    // Verifico que se haya removido
    cy.get("@my-list").children().should("have.length", 0);
    cy.get("@catalogue-list").children().should("have.length", 13);
    cy.get("@catalogue-list").first().contains("1984");
    cy.get("@catalogue-list").first().contains("George Orwell");
  });
});

describe("Verify searcher filter", () => {
  beforeEach(() => {
    // Visito la página
    cy.visit("/");

    // Realizo las queries
    cy.get('[data-cy="search-by-title-or-author"]').as("book-searcher");
    cy.get('[data-cy="catalogue-list"]').as("catalogue-list");

    // Verifico que este vacío
    cy.get("@book-searcher").should("be.empty");
    // Si es correcto entonces el catalogo está completo
    cy.get("@catalogue-list").children().should("have.length", 13);
  });

  it("Search a book by its title", () => {
    // Busco el libro de Harry Potter
    cy.get("@book-searcher").type("Harry Potter");
    cy.get("@catalogue-list").first().contains("Harry Potter");
    cy.get("@catalogue-list").children().should("have.length", 1);
  });

  it("Search a book by its author", () => {
    // Busco el libro de Stephen King
    cy.get("@book-searcher").type("Stephen King");
    cy.get("@catalogue-list").first().contains("Stephen King");
    cy.get("@catalogue-list").children().should("have.length", 1);
  });

  it("Search more than one book by author", () => {
    // Busco más de un libro por autor
    cy.get("@book-searcher").type("George");
    cy.get("@catalogue-list").children().should("have.length", 2);
  });

  it("No books found in the catalogue", () => {
    cy.get("@book-searcher").type("Arthur Conan Doyle");
    cy.get("@catalogue-list").children().should("have.length", 0);
  });

  afterEach(() => {
    // Limpio el buscador
    cy.get("@book-searcher").clear();

    cy.get("@catalogue-list").children().should("have.length", 13);
  });
});
