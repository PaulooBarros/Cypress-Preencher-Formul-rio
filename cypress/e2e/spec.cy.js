describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/src/login.html')
    cy.get('#username').type('admin',  {delay: 0}).should('have.value', 'admin')
    cy.get('#password').type(1234, {delay: 0}).should('have.value',1234)
    cy.contains('button','Entrar').click()
  });
})