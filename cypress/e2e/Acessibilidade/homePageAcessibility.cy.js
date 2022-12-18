/// <reference types="Cypress"/>


// -- Teste experimental, para validar a acessibilidade das páginas nos testes de:
//    1: Navegação por Teclado
//    2: Contorno Altline nos elementos

describe("Keyboard navigation and Altline", () => {
    beforeEach(() => {
        cy.viewport(1440, 900)
        cy.visit('https://vitrine.globo.com')

        Cypress.Keyboard.defaults({
            keystrokeDelay: 20,
        })
        
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Validating TAB navigation order and Outline border until login modal', () => {
        cy.tab()
        cy.get('[alt="Logo Vitrine Globo"]')
            .should('be.focused')

        cy.tab()
        cy.get('.btn-group')
            .should('be.focused')
            //.type('{enter}')
            .click()
            .should('have.attr', 'aria-expanded', 'true')       
            .tab()
            .get('.btn__enter').should('be.focused')
            .type('{enter}')    

        cy.get('#login')
            .type('glbteste.avt.parcerias+1315@mailinator.com')
            .tab().tab()
            .type('12345678')  
            .tab().tab().tab()
            .type('{enter}')
    })

    it.only("Validating TAB navigation order and Outline border", () => {                        
        
        //HEADER
        cy.tab()
        cy.get('[alt="Logo Vitrine Globo"]')
            .should('be.focused')
            .and('have.css', 'outline-color', 'rgb(255, 143, 1)')

        cy.tab()
        cy.get('.btn-group')
            .should('be.focused')
            .and('have.css', 'outline-color', 'rgb(255, 143, 1)')


        //HEROS    
        cy.tab()
        cy.get('#hero-card-0')
            .should('be.focused')
            .and('have.css', 'outline-color', 'rgb(255, 143, 1)')

        cy.tab()
        cy.get('#hero-card-0 > .shadow > .info-list > .offer-wrapper > .offer > .offer__button > .vtr-button')
            .should('be.focused')
            .and('have.css', 'outline-color', 'rgb(255, 143, 1)')
    
        cy.tab()
        cy.get('#hero-card-1')
            .should('be.focused')
            .and('have.css', 'outline-color', 'rgb(255, 143, 1)')

        cy.tab()
        cy.get('#hero-card-1 > .shadow > .info-list > .offer-wrapper > .offer > .offer__button > .vtr-button')
            .should('be.focused')
            .and('have.css', 'outline-color', 'rgb(255, 143, 1)')
        
        cy.tab()
        cy.get('#hero-card-2')
            .should('be.focused')
            .and('have.css', 'outline-color', 'rgb(255, 143, 1)')
            .tab()
        cy.get('#hero-card-2 > .shadow > .info-list > .offer-wrapper > .offer > .offer__button > .vtr-button')
            .should('be.focused')
            .and('have.css', 'outline-color', 'rgb(255, 143, 1)')

        cy.tab()
        cy.get('#hero-card-3')
            .should('be.focused')
            .and('have.css', 'outline-color', 'rgb(255, 143, 1)')
        
        cy.tab()
        cy.get('#hero-card-3 > .shadow > .info-list > .offer-wrapper > .offer > .offer__button > .vtr-button')
            .should('be.focused')
            .and('have.css', 'outline-color', 'rgb(255, 143, 1)')


        cy.tab()
        cy.get('#hero-card-4')
            .should('be.focused')
            .and('have.css', 'outline-color', 'rgb(255, 143, 1)')
        cy.tab()
        cy.get('#hero-card-4 > .shadow > .info-list > .offer-wrapper > .offer > .offer__button > .vtr-button')
            .should('be.focused')
            .and('have.css', 'outline-color', 'rgb(255, 143, 1)')

        
        //FILTERS
        cy.tab().tab()
            .get(':nth-child(1)')
            .should('be.focused')
            .and('have.attr', 'aria-label', 'Filtro Todos')
            .and('have.attr', 'aria-checked', 'true')
            .and('have.css', 'outline-color', 'rgb(255, 143, 1)')

            .get(':nth-child(1)').type('{rightarrow}')
        
    })
})