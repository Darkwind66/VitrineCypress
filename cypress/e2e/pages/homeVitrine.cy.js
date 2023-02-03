/// <reference types="Cypress"/>

describe('Validating Offers', () => {
    beforeEach(() =>{
        cy.visit('https://vitrine-qa1.qa.globoi.com/')
        cy.get('.btn-login').click()
        cy.get('.btn__enter').should('be.visible').click()
        cy.get('#login').type('glbteste.avt.parcerias+1339@mailinator.com')
        cy.get('#password').type('12345678')
        cy.get('.button').click()

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
    })

    it.skip('Offers Caroussel', () => {
        cy.get('#globoplay >>>>>>> .vtr-button')
            .should('be.visible')
            .and('have.text', ' Detalhes do plano')
            .click()
            .scrollIntoView()


        cy.get('#globoplay > .offer-card > .offer-card__back > .offer-card-back > .body > .offer-card-back__buttons > .offer-card-back__buttons--item > .vtr-input')
            .scrollIntoView()
            .click({force:true})
        // Valida se nenhum card está sendo repetido, pois pede uma conta exata dos cards de ofertas recomendadas (filtro todos)
        // getAllRecommendations(Cypress.env('API_RECOMMENDATION_URL')).then((Response) => {
        //     for(var index in Response.body.offers){
        //         var offerCard = (Response.body.offers[index].name)
        //         if(offerCard == 'Globoplay'){  
        //     }

            // cy.get('[aria-label="Filtro Todos"]').click()
            // cy.get('#splide02-list').children().should('have.length',index)

       // })         
    })

    it('Validating Offer Links', () => {
        cy.get('#globoplay > .offer-card > .offer-card__front > .offer-card-front > .body > .offer-card-front__group-buttons > vtr-link.offer-card-front__group-buttons--plan > .vtr-input')
            .click()
        cy.url().should('contain', 'Pro-0279')
        cy.go('back')
    
        
        cy.get('.offer-list').get('a').each(page => {
            cy.request(page.prop('href'))
        })
    })
})