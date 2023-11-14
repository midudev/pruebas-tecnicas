/// <reference types="cypress" />
import { products } from '../../../../products.json'

describe('ResultSearch page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/items?search=')
  })

  it('Render all items correctly', () => {
    cy.contains(`Resultados de búsqueda de "Todos": ${products.length}`)

    cy
      .get('section')
      .children('article')
      .should('have.length', 6)

    cy
      .get('ul')
      .children('li')
      .should('have.length', products.length)
  })

  it('Not found items', () => {
    const search = 'cocina'
    cy
      .get('input[placeholder="laptops, smartphones..."]')
      .type(search)

    cy
      .get('form')
      .submit()

    cy.contains('No se encontraron elementos')
    cy.contains('Intenta buscando otra cosa')
  })

  it('Search one category', () => {
    const search = 'fragrances'

    cy
      .get('input[placeholder="laptops, smartphones..."]')
      .type(search)

    cy
      .get('form')
      .submit()

    cy.contains(`Resultados de búsqueda de "${search}": 5`)

    cy
      .get('section')
      .children('article')
      .should('have.length', 1)

    cy
      .get('ul')
      .children('li')
      .should('have.length', 5)
  })

  it('Navigate to item page', () => {
    const product = products[0]

    cy
      .get('ul')
      .children('li')
      .first()
      .click()

    cy.url().should('include', '/items/1')

    cy.contains(product.title)
    cy.contains(product.description)
    cy.contains(`${product.price}$`)
    cy.contains(`${product.stock} Disponibles`)

    cy
      .get('button[type="submit"]')
      .contains(/comprar/i)
  })

  it('Unspecified search parameter does not return items', () => {
    cy.visit('http://localhost:5173/items')

    cy
      .contains(/No se encontraron elementos/i)

    cy
      .contains(/Intenta buscando otra cosa/i)
  })
})
