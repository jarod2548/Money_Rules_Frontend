describe('template spec', () => {
  it('passes', () => {
    cy.visit('/login')
    cy.intercept('POST', '**/login').as('login');
    cy.get('form.ng-pristine').click();
    cy.get('#login-username-input').click();
    cy.get('#login-username-input').type('user1');
    cy.get('#login-password-input').type('password');
    cy.get('button[type="submit"]').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
    cy.url().should('not.include', '/login');
    cy.getCookie('jwt').should('exist');
  });
})