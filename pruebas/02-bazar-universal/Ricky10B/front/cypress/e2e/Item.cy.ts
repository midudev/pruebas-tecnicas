/// <reference types="cypress" />
import { products } from '../../../../products.json'

describe('Item page', () => {
  const product = products[0]

  beforeEach(() => {
    cy.visit('http://localhost:5173/items/1')
  })

  it('Render item correctly', () => {
    cy.contains(product.title)
    cy.contains(product.description)
    cy.contains(`${product.price}$`)
    cy.contains(`${product.stock} Disponibles`)

    cy
      .get('picture#containerImages')
      .find(`img[src="${product.thumbnail}"]`)

    cy
      .get('picture#containerImages')
      .find('picture')
      .children('img')
      .should('have.length', product.images.length - 1)

    cy
      .get('button[type="submit"]')
      .contains(/comprar/i)
  })

  it('Item that does not exist', () => {
    cy.visit('http://localhost:5173/items/asdf')

    cy.contains(/Error inesperado/i)

    cy.contains(/volver al inicio/i)
    cy.contains(/ir a la página anterior/i)
  })

  it('Search other item', () => {
    const search = 'compu'

    cy
      .get('input[name="search"]')
      .type(search)

    cy
      .get('form')
      .submit()

    cy
      .url()
      .should('contain', `/items?search=${search}`)
  })
})
