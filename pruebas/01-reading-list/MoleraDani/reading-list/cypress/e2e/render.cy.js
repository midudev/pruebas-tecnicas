describe('Library', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('renders the book list', () => {
    cy.get('.library-grid').should('be.visible')
  })

  it('renders the reading list', () => {
    cy.get('.reading-list-aside').should('be.visible')
  })
})
