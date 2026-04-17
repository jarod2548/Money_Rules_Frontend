describe('My First Test', () => {
  it('Login', () => {
    cy.visit("http://localhost:4200")

    cy.get("#login-username-input").type("test")

    cy.get("#login-password-input").type("1234")
  })
})