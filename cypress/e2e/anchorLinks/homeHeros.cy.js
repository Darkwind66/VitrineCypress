/// <reference types="Cypress"/>

describe('Validating Anchor Links in Heros Carousel As Unlogged', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('VITRINE_HOME'))
        cy.get('.cookie-banner-lgpd_accept-button').click()
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Validating Hero Position 1', () => {
        cy.get('#splide01-slide01 > .hero__card--mobile > #hero-card-0')
            .click()
        cy.get('#splide01-slide01 > .hero__card--mobile > #hero-card-0 > .shadow > .info-list > .offer-wrapper > .offer > .app-btn')
            .click()
        for(var index = 1; index <= 6; index++){
            if(index == 1){
                cy.get(':nth-child('+index+') > .btn-filter')
                .should('have.class', 'active')
                cy.log(index)
            }else{
                cy.get(':nth-child('+index+') > .btn-filter')
                .should('not.have.class', 'active')
                cy.log(index)
            }
        }    
    })

    it('Validating Hero Position 2', () => {
        cy.get('#splide01-slide02 > .hero__card--mobile > #hero-card-1')
            .click()
        cy.get('#splide01-slide02 > .hero__card--mobile > #hero-card-1 > .shadow > .info-list > .offer-wrapper > .offer > .app-btn')
            .click()
            for(var index = 1; index <= 6; index++){
                if(index == 5){
                    cy.get(':nth-child('+index+') > .btn-filter')
                    .should('have.class', 'active')
                    cy.log(index)
                }else{
                    cy.get(':nth-child('+index+') > .btn-filter')
                    .should('not.have.class', 'active')
                    cy.log(index)
                }
            }
    })

    it('Validating Hero Position 3', () => {
        cy.get('#splide01-slide03 > .hero__card--mobile > #hero-card-2')
            .click()
        cy.get('#splide01-slide03 > .hero__card--mobile > #hero-card-2 > .shadow > .info-list > .offer-wrapper > .offer > .app-btn')
            .click()
            for(var index = 1; index <= 6; index++){
                if(index == 5){
                    cy.get(':nth-child('+index+') > .btn-filter')
                    .should('have.class', 'active')
                    cy.log(index)
                }else{
                    cy.get(':nth-child('+index+') > .btn-filter')
                    .should('not.have.class', 'active')
                    cy.log(index)
                }
            }
    })

    it('Validating Hero Position 4', () => {
        cy.get('#splide01-slide04 > .hero__card--mobile > #hero-card-3')
            .click()
        cy.get('#splide01-slide04 > .hero__card--mobile > #hero-card-3 > .shadow > .info-list > .offer-wrapper > .offer > .app-btn')
            .click()
        for(var index = 1; index <= 6; index++){
            if(index == 4){
                cy.get(':nth-child('+index+') > .btn-filter')
                    .should('have.class', 'active')
            }else{
                cy.get(':nth-child('+index+') > .btn-filter')
                    .should('not.have.class', 'active')
            }
        }
    })

    it('Validating Hero Position 5', () => {
        cy.get('#splide01-slide05 > .hero__card--mobile > #hero-card-4')
            .click()
        cy.get('#splide01-slide05 > .hero__card--mobile > #hero-card-4 > .shadow > .info-list > .offer-wrapper > .offer > .app-btn')
            .click()
        for(var index = 1; index <= 6; index++){
            if(index == 4){
                cy.get(':nth-child('+index+') > .btn-filter')
                    .should('have.class', 'active')
            }else{
                cy.get(':nth-child('+index+') > .btn-filter')
                    .should('not.have.class', 'active')
            }
        }   
    })

    describe('Validating as Globoplay Subscriber', () => {  
        beforeEach(() => {
            cy.get('app-header-bar-fit > header').scrollIntoView()
            cy.get('.text-user').click()
            cy.get('.btn__enter', {timeout:10000}).click()  
            cy.get('#login').type(Cypress.env('EMAIL_GLOBOPLAY_MENSAL'))
            cy.get('#password').type(Cypress.env('USER_PASSWORD'))
            cy.get('.button').click()
        })
        
        // Verificar uma forma de reaproveitar o código do 1º teste :)
        it('Validating Hero Position 1', () => {
            cy.get('#splide01-slide01 > .hero__card--mobile > #hero-card-0')
                .click()
            cy.get('#splide01-slide01 > .hero__card--mobile > #hero-card-0 > .shadow > .info-list > .offer-wrapper > .offer > .app-btn')
                .click()
            for(var index = 1; index <= 7; index++){
                if(index == 1){
                    cy.get(':nth-child('+index+') > .btn-filter')
                    .should('have.class', 'active')
                }else{
                    cy.get(':nth-child('+index+') > .btn-filter')
                    .should('not.have.class', 'active')
                }
            }
        })

        it('Validating Hero Position 2', () => {
            cy.get('#splide01-slide02 > .hero__card--mobile > #hero-card-1')
                .click()
            cy.get('#splide01-slide02 > .hero__card--mobile > #hero-card-1 > .shadow > .info-list > .offer-wrapper > .offer > .app-btn')
                .click()
            for(var index = 1; index <= 7; index++){
                if(index == 6){
                    cy.get(':nth-child('+index+') > .btn-filter')
                    .should('have.class', 'active')
                }else{
                    cy.log(index)
                    cy.get(':nth-child('+index+') > .btn-filter')
                    .should('not.have.class', 'active')
                }
            }
        })

        it('Validating Hero Position 3', () => {
            cy.get('#splide01-slide03 > .hero__card--mobile > #hero-card-2')
                .click()
            cy.get('#splide01-slide03 > .hero__card--mobile > #hero-card-2 > .shadow > .info-list > .offer-wrapper > .offer > .app-btn')
                .click()
            for(var index = 1; index <= 7; index++){
                if(index == 6){
                    cy.get(':nth-child('+index+') > .btn-filter')
                    .should('have.class', 'active')
                }else{
                    cy.get(':nth-child('+index+') > .btn-filter')
                    .should('not.have.class', 'active')
                }
            }
        })

        it('Validating Hero Position 4', () => {
            cy.get('#splide01-slide04 > .hero__card--mobile > #hero-card-3')
                .click()
            cy.get('#splide01-slide04 > .hero__card--mobile > #hero-card-3 > .shadow > .info-list > .offer-wrapper > .offer > .app-btn')
                .click()
            for(var index = 1; index <= 7; index++){
                if(index == 5){
                    cy.get(':nth-child('+index+') > .btn-filter')
                    .should('have.class', 'active')
                }else{
                    cy.get(':nth-child('+index+') > .btn-filter')
                    .should('not.have.class', 'active')
                }
            }
        })

        it('Validating Hero Position 5', () => {
            cy.get('#splide01-slide05 > .hero__card--mobile > #hero-card-4')
                .click()
            cy.get('#splide01-slide05 > .hero__card--mobile > #hero-card-4 > .shadow > .info-list > .offer-wrapper > .offer > .app-btn')
                .click()
            for(var index = 1; index <= 7; index++){
                if(index == 3){
                    cy.get(':nth-child('+index+') > .btn-filter')
                    .should('have.class', 'active')
                }else{
                    cy.get(':nth-child('+index+') > .btn-filter')
                    .should('not.have.class', 'active')
                }
            }
        })
    })
})

