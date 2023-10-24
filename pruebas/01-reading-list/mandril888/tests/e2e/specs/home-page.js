describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Contains title page", () => {
    cy.contains("h1", /catálogo de libros/i);
  });

  it("Books to read title not exists", () => {
    cy.get("h2").should("not.be.visible");
  });

  it("No buttons to remove exists", () => {
    cy.contains(/quitar libro/i).should("not.be.visible");
  });

  describe("On add a book to read list", () => {
    beforeEach(() => {
      cy.contains(/añadir libro/i).click();
    });

    it("A book is added to Books List Store", () => {
      cy.contains("h2", /Lista de lectura/i);
    });

    it("Book in read list contains a button to remove to list", () => {
      cy.get("button")
        .last()
        .contains(/quitar libro/i)
        .should("be.visible");
    });
  });

  describe("On remove a book from read list", () => {
    beforeEach(() => {
      cy.contains(/añadir libro/i).click();
      cy.get("button")
        .last()
        .should("be.visible")
        .contains(/quitar libro/i)
        .click();
    });

    it("Books to read title not exists", () => {
      cy.get("h2").should("not.be.visible");
    });

    it("No buttons to remove exists", () => {
      cy.contains(/quitar libro/i).should("not.be.visible");
    });
  });
});
