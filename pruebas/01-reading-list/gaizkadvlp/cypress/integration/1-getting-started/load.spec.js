/// <reference types="cypress" />

describe('Carga la página principal', () => {
  beforeEach(() => {
    cy.visit('https://libreria-opal.vercel.app/');
  })

  it('La página principal carga OK', () => {
    cy.title().should('include','Librería')
  })
})
