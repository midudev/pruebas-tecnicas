/// <reference types="cypress" />

describe('App page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('Search for products correctly', () => {
    const search = 'laptop'

    cy
      .get('input[placeholder="laptops, smartphones..."]')
      .type(search)

    cy.get('button[type="submit"]').click()

    cy.url().should('include', `/items?search=${search}`)
  })

  it('Empty search should return an error message', () => {
    cy.get('input[placeholder="laptops, smartphones..."]')

    cy.get('button[type="submit"]').click()

    cy.contains('El campo no puede estar vacío')

    cy.clock()
    cy.tick(2000)
    cy
      .contains('El campo no puede estar vacío')

    cy.tick(1000)
    cy
      .contains('El campo no puede estar vacío')
      .should('not.exist')
  })

  it('Navigating to a page that does not exist should display an error page', () => {
    cy.visit('http://localhost:5173/resultados')

    cy.contains(/página no encontrada/i)

    const buttonBackHome = cy.contains(/Volver al inicio/i)
    cy.contains(/Ir a la página anterior/i)

    buttonBackHome.click()

    cy.url().should('equal', 'http://localhost:5173/')
  })
})
