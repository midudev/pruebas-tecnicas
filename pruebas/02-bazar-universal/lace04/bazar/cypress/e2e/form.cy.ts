describe('Navigation for app', () => {
  it('Navigation', () => {
    cy.visit('/');
    cy.get('.gap-x-2 > div > .flex').type(`{selectall}{backspace}laptops`);
    cy.get('form').submit();
    cy.get('#product').click();
    cy.get('#back-btn').click();
    cy.get('#navbar').click();
  });
});


