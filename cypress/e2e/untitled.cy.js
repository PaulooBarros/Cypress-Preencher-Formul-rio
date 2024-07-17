// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test



describe('Formulário de cadastro', () => {
    beforeEach(() => {
        cy.visit('./src/login.html')
        cy.get('#username').type('admin',  {delay: 0}).should('have.value', 'admin')
        cy.get('#password').type(1234, {delay: 0}).should('have.value',1234)
        cy.contains('button','Entrar').click()
    });

});
      



