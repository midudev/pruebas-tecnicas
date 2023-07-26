/// <reference types="cypress" />

describe('Elements are in the DOM', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5175')
  })

  it('should have a reading list, filters and books list', () => {
    cy.get('[data-cy="reading-list"]').should('exist')
    cy.get('[data-cy="filters"]').should('exist')
    cy.get('[data-cy="books-list"]').should('exist')
  })
})
