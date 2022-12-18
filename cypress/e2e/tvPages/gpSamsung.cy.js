/// <reference types="Cypress"/>

describe('Validating page components and offers by elegibility', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('GP_SAMSUNG'))
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Should be at correct URL for Samsung TV', () => {
        cy.url().should('equal', Cypress.env('GP_SAMSUNG'))
    })

    

})