// cypress/integration/telaCadastro.spec.js

describe('Testes em Formulário', () => {
    beforeEach(() => {
        cy.visit('./src/login.html'); // Visita o site antes de cada teste
        cy.get('#username').type('admin').should('have.value', 'admin');
        cy.get('#password').type('1234').should('have.value', '1234');
        cy.contains('button', 'Entrar').click();
        cy.get('h1').should('contain', 'Formulário de Cadastro').should('be.visible');
    });

    it('Preenchendo todos os dados e enviando Paulo Gustavo', function () {
        cy.clock();
        cy.PauloGustavo();
        const randomNumber = cy.generatePhoneNumber();
        cy.get('#telefone').type(randomNumber);
        cy.get('#mensagemSucesso').should('be.visible');
        cy.tick(3000);
    });

    it('Preenchendo Bárbara Coelho', function () {
        cy.clock();
        cy.BarbaraCoelho();
        const randomNumber = cy.generatePhoneNumber();
        cy.get('#telefone').type(randomNumber);
        cy.get('#mensagemSucesso').should('be.visible');
        cy.tick(3000);
    });

    it('Preenchendo Júlia Costa', function () {
        cy.clock();
        cy.JuliaCosta();
        const randomNumber = cy.generatePhoneNumber();
        cy.get('#telefone').type(randomNumber);
        cy.get('#mensagemSucesso').should('be.visible');
        cy.tick(3000);
    });

    it.only('Preenchendo os 3 Criados', function () {
        
        cy.PauloGustavo();
        cy.get('#mensagemSucesso').should('be.visible');

        cy.BarbaraCoelho();
        cy.get('#mensagemSucesso').should('be.visible');

        cy.JuliaCosta();
        cy.get('#mensagemSucesso').should('be.visible');
    });
});
