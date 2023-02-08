/// <reference types="Cypress"/>


describe('Testing Google Analytcs Events on Pages CTA', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Page -- Globoplay Mais Canais ', () => {
        cy.visit('https://vitrine-qa1.qa.globoi.com/assine/mais-canais-tv')

        cy.get('vtr-button.offer-button > .vtr-button').click()
            cy.window().then(win => {
                expect(win.dataLayer['event_action']).contain('cta')
        });
    })

    // it('tracks event on button click', () => {
    //     cy.visit('https://vitrine-qa1.qa.globoi.com/assine/mais-canais-tv')

    //     cy.get('button').click({multiple:true});
    //     cy.window().then(win => {
    //         const spy = cy.spy(win.ga, 'send');
    //         expect(spy).to.be.calledWithMatch({ hitType: 'event' });
    //     });
    // });
    
    


})