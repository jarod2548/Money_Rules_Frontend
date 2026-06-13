describe('template spec', () => {
  it('passes', () => {
    cy.visit('/login')
    cy.get('form.ng-pristine').click();
    cy.get('#login-username-input').click();
    cy.get('#login-username-input').type('user1');
    cy.get('#login-password-input').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('not.include', '/login');
    cy.getCookie('jwt').should('exist');
  });
})