/* global cy it beforeEach describe */
describe('app e2e', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('la pagina renderiza', () => {
    cy.contains('libros disponibles')
  })

  it('se puede aceder a la informacion del libro', () => {
    cy.get('button').first().parent().click()
    cy.contains('Synopsis')
  })

  it('se puede agregar a la lista de lectura', () => {
    cy.get('button').first().click()
    cy.contains('1 en lista de lectura')
  })

  it('se puede aceder a la informacion del libro en lista de lectura', () => {
    cy.get('button').first().click()
    cy.contains('1 en lista de lectura')
    cy.get('button').last().parent().click()
    cy.contains('Synopsis')
  })

  it('se puede eliminar a la lista de lectura', () => {
    cy.get('button').first().click()
    cy.contains('1 en lista de lectura')
    cy.get('button').last().click()
    cy.contains('0 en lista de lectura')
  })
})
