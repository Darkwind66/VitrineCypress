/// <reference types="Cypress"/>

describe('Default page test',() => {
    it('Visitando a página', () => {
        cy.visit("https://vitrine-qa1.qa.globoi.com/assine/todasasflores")  
        cy.get('.cookie-banner-lgpd_accept-button').click()  
    })

    beforeEach(() => {
        //Ajusta a resolução da tela
        cy.viewport(1440, 900)
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Validando itens do componente Header', () => {
        //Valida se o Logo Vitrine está redirecionando para a Home
        cy.get('[alt="Logo Vitrine Globo"]')
            .click()
            .url().should('eq', Cypress.env('VITRINE_HOME'))
            .go('back')
            .url().should('eq', Cypress.env('DISNEY_PAGE'))

        cy.get('.text-user').click()
        cy.get('.btn__enter').should('be.visible')
        //cy.url().should('contain', Cypress.env('LOGIN_URL'))
        // cy.get('#login').type('vitrine.teste3@gmail.com')
        // cy.get('#password').type('Teste@123')
        //cy.get('.button').click()
    })

    //Valida os componentes e informações do Fullscreen da página
    it('Validando itens do componente Hero Fullscreen', () => {
        //Valida a imagem do Hero
        cy.get('.hero__bg-image > img').should('be.visible')
        .should(([img]) => {
            expect(img.naturalWidth).to.equal(1920)
            expect(img.naturalHeight).to.equal(1080)
        });

        //Logo

        cy.get('.hero__content__description')
            .should('be.visible')
            .and('have.text', ' Uma trama que vai mexer com todos os seus sentidos. Com Regina Casé, Sophie Charlotte, Letícia Colin e outros grandes nomes.');
        
        cy.get('.price-list__discount__value > span')
            .scrollIntoView()
            .should('have.text', ' 40% ');

        cy.get('.offer-button > .vtr-button')
            .scrollIntoView()
            .should('be.visible')
            .and('have.text', ' Conheça outros planos ')
            .click()
            .scrollIntoView()
    })

    //Valida os componentes do Banner argumento de vendas 01
    it('Validando componente Banner 01', () => {
        cy.get('.partner > picture')
            .scrollIntoView()
            .should('be.visible')  
    })


    it('Validando o componente Filtros', () => {
        cy.get('.globo-bold')
            .should('be.visible')
            .and('have.text', 'ASSINE JÁ')
        cy.get('.globo-thin')
            .should('be.visible')
            .and('have.text', 'Explore os detalhes dos nossos produtos')

    })

    //Valida o botão Veja mais ofertas
    it('Validando o Botão Veja mais ofertas', () => {
        cy.get('.redirect__btn > .vtr-input')
            .scrollIntoView()
            .should('be.visible')
            .click()
            .url().should('eq', Cypress.env('VITRINE_HOME'))
            .go("back")
    })


    it('Validando o FAQ', () => {
        cy.get('.faq__title')
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', 'Perguntas Frequentes')

        cy.get('.faq__description')
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', 'Clique no botão abaixo para ver as perguntas mais frequentes sobre assinatura.')

        cy.get('.faq__button > .vtr-input')
            .scrollIntoView()
            .should('be.visible')
            .and('contain.text', 'Saiba mais')
    })

})