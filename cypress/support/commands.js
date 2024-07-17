// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Em support/commands.js ou similar
Cypress.Commands.add('PauloGustavo', function () {
    cy.get('#nome').type('Paulo Gustavo Angelo de Barros', { delay: 0 }).should('have.value', 'Paulo Gustavo Angelo de Barros');
    cy.get('#telefone').type(123456789).should('have.value',123456789)
    cy.get('#dataNascimento').type('2004-07-12').should('have.value', '2004-07-12');
    cy.get('#masculino').check().should('be.checked');
    cy.contains('button', 'Cadastrar').click();
});

Cypress.Commands.add('BarbaraCoelho', function () {
    cy.get('#nome').type('Bárbara Coelho', { delay: 0 }).should('have.value', 'Bárbara Coelho');
    cy.get('#telefone').type(123456789).should('have.value',123456789)
    cy.get('#dataNascimento').type('1993-01-30').should('have.value', '1993-01-30');
    cy.get('#feminino').check().should('be.checked');
    cy.contains('button', 'Cadastrar').click();
});

Cypress.Commands.add('JuliaCosta', function () {
    cy.get('#nome').type('Júlia Costa', { delay: 0 }).should('have.value', 'Júlia Costa');
    cy.get('#telefone').type(123456789).should('have.value',123456789)
    cy.get('#dataNascimento').type('1978-10-20').should('have.value', '1978-10-20');
    cy.get('#outro').check().should('be.checked');
    cy.contains('button', 'Cadastrar').click();
});









