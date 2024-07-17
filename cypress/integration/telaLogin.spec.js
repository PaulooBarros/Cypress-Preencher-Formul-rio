describe('Testes tela de Login', () => {
    beforeEach(() => {
        cy.visit('./src/login.html'); // Visita o site antes de cada teste

    });

    it.only('Fazendo Login com Dados Corretos', () => {
        cy.get('h1').contains('Login')
        cy.get('#username').type('admin').should('have.value', 'admin')
        cy.get('#password').type(1234).should('have.value', 1234)
        cy.contains('button', 'Entrar').click()
        cy.contains('button', 'Cadastrar').should('be.visible') // Já que o botão mudou para cadastrar, o login foi efetuado com sucesso
    });

    it('Fazendo Login com username errado.', () => {
        cy.get('#username').type('administrador')
        cy.get('#password').type(1234)
        cy.contains('button', 'Entrar').click()
        cy.get('#loginMensagem').should('be.visible')
    })

    it('Fazendo Login com Senha errada.', () => {
        cy.get('#username').type('admin')
        cy.get('#password').type(12345678)
        cy.contains('button', 'Entrar').click()
        cy.get('#loginMensagem').should('be.visible')
    })

    it('Fazendo Login com Username vazio.', () => {
        cy.get('#password').type(12345678)
        cy.contains('button', 'Entrar').click()
        cy.contains('button', 'Entrar').should('be.visible')
        // se o botão entrar ainda está aparecendo, o login não foi feito
    })

    it('Fazendo Login com Senha vazia.', () => {
        cy.get('#username').type('admin')
        cy.contains('button', 'Entrar').click()
        cy.contains('button', 'Entrar').should('be.visible')
        // se o botão entrar ainda está aparecendo, o login não foi feito
    })



});