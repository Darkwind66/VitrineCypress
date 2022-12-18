/// <reference types="cypress" />

describe('Globoplay Full Test', () => {
    before(() => {
        cy.visit('vitrine.globo.com/assine/globoplay')
        cy.viewport(1980, 1080)

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
    })
    it('TEST 01 - Header', () => {
        cy.Header()

    }) 
})