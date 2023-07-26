describe('App', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('should have a reading list, filters and books list', () => {
    cy.get('[data-cy="reading-list"]').should('exist')
    cy.get('[data-cy="filters"]').should('exist')
    cy.get('[data-cy="books-list"]').should('exist')
  })
})
