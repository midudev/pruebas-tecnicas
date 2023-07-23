describe('Main Page', () => {
  it('should see main page', () => {
    cy.visit('/').title().should('eq', 'Book Store')
  })

  it('should see header', () => {
    cy.visit('/')
    cy.findByPlaceholderText(/search book titles.../i).should('exist')
  })
})
