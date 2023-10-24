describe('Books app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('filters books correctly', () => {
    cy.get('#name').type('d');
    cy.get('#genre').select('Fantasía');
    cy.get('#pages').invoke('val', 1000).trigger('change');
    cy.get('main').get('img').should('have.length', 2);
    cy.get('main').find('img').should('have.attr', 'alt').should('include','Juego de Tronos');
  })
})