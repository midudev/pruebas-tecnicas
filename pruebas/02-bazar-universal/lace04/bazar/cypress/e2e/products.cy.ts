describe('products', () => {
  it('Should get all products for search', () => {
    cy.visit('/');
    cy.get('.gap-x-2 > div > .flex').type(`{selectall}{backspace}iphone`);
    cy.get('form').submit();
    cy.get('[data-test-id="product"]').should('have.length', 2);
  });

  it('Should get all products for search after making an initial search.', () => {
    cy.visit('/');
    cy.get('.gap-x-2 > div > .flex').type(`{selectall}{backspace}iphone`);
    cy.get('form').submit();
    cy.get('[data-test-id="product"]').should('have.length', 2);
    cy.get('.gap-x-2 > div > .flex').type(`{selectall}{backspace}midudev`);
    cy.get('form').submit();
    cy.get('[data-test-id="product"]').should('have.length', 30);
    cy.get('.gap-x-2 > div > .flex').type(`{selectall}{backspace}laptops`);
    cy.get('form').submit();
    cy.get('[data-test-id="product"]').should('have.length', 5);
  });

  it('Should get all products for search from the productDetail.', () => {
    cy.visit('/');
    cy.get('.gap-x-2 > div > .flex').type(`{selectall}{backspace}laptops`);
    cy.get('form').submit();
    cy.get('[data-test-id="product"]').should('have.length', 5);
    cy.get('#product').click();
    cy.get('[data-test-id="buttonSubmit"]').type(`{selectall}{backspace}home`);
    cy.get('.my-3 > .gap-x-2 > .inline-flex').click();
    cy.get('[data-test-id="product"]').should('have.length', 5);
    
  });

  it('Should get all products', () => {
    cy.visit('/');
    cy.get('.gap-x-2 > div > .flex').type(`{selectall}{backspace}midudev`);
    cy.get('form').submit();
    cy.get('[data-test-id="product"]').should('have.length', 30);
  });

  it("Show a message when there's no products", () => {
    cy.visit('/');
    cy.get('[data-test-id="product"]').should('have.length', 0);
  });
});
