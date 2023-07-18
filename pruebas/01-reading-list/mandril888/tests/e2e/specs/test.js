describe("Home page", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Books catalog");
  });
});
