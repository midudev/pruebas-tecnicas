describe('Book actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('adds a book to the reading list', () => {
    cy.get('.library-grid li').first().click()
    cy.get('.reading-list-aside li').should('have.length', 1)
  })
})
