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



Cypress.Commands.add('Menu', () => {
        
    cy.get('.button-menu-container > button')
        .click()
        .should('have.attr', 'aria-expanded', 'true')
    
    cy.get('.sidebar')
        .should('be.visible')
        .and('have.class', 'active')  
        
        
    // -- Rascunhos para melhorar a automação do MENU:        

    // cy.get('.sidebar > ul')
    //     .children() 
    //     .should('have.length', 11).then(() => {
    //         menuPages.forEach(menuPpages => {
    //             cy.contains(menuPages)
    //             .then((Link) => {
    //                 cy.request(Link.prop('href'))
    //             })                
    //         })
    //     })

    // const menuList =  cy.get('.sidebar > ul').children()
    // cy.log(menuList.first)


    // cy.get('.sidebar > ul').children().should(($li) => {
    //     expect($li).to.have.length(11)
    //     expect($li[0]).to.contain.text('Home')
    //     expect($li[1]).to.contain.text('Globoplay')
    //     expect($li[2]).to.contain.text('Globoplay + canais ao vivo')
    //     expect($li[3]).to.contain.text('Disney+')
    //     expect($li[4]).to.contain.text('Telecine')
    //     expect($li[5]).to.contain.text('Lionsgate+')
    //     expect($li[6]).to.contain.text('Premiere')
    //     expect($li[7]).to.contain.text('Giga Gloob')
    //     expect($li[8]).to.contain.text('Discovery+')
    //     expect($li[9]).to.contain.text('Apple TV+')
    //     expect($li[10]).to.contain.text('Combate')
    //     expect($li[11]).to.contain.text('Deezer Premium')
    // })

    // cy.get('.sidebar > ul').children().each(($name, index) => {
    //     cy.wrap($name)
    //     .should('contain.text', [index])
    // })
    
})


Cypress.Commands.add('LogoVitrine',() => {
    cy.get('[alt="Logo Vitrine Globo"]')
            .scrollIntoView()
            .click()
            .url().should('eq', 'https://vitrine.globo.com/')
            .go('back')
            .url().should('eq', 'https://vitrine.globo.com/assine/deezer-premium')        
})


Cypress.Commands.add('LoginButton',() => {
    
    cy.get('.text-user').click()
    cy.get('.btn__enter').should('be.visible').click()

    cy.url().should('contain', Cypress.env('LOGIN_URL'))
    cy.go('back')

    // cy.get('#login').type('vitrine.teste3@gmail.com')
    // cy.get('#password').type('Teste@123')
    // cy.get('.button').click()
})


Cypress.Commands.add('fullscreenImage_Desktop',() => {
    // -- Fullscreen
    cy.get('.hero__bg-image > img')
        .should('be.visible')
        .should(([img]) => {
            expect(img.naturalWidth).to.above(1000)
            expect(img.naturalHeight).to.above(600)  
        })        
    // -- Logo    
    cy.get('.hero__content__logo > img')    
        .should('be.visible')
        .should(([img]) => {
            expect(img.naturalWidth).to.above(380)
            expect(img.naturalHeight).to.above(120)
        })
})


Cypress.Commands.add('FullscreenButtons_Default',() => {
    cy.get('.offer-button > .vtr-button')
        .scrollIntoView()
        .should('be.visible')
        .and('have.text', ' Conheça as ofertas ')
        .click()

        cy.get(':nth-child(1) > .btn-filter')
            .scrollIntoView()
            .should('have.class', 'active')
})


Cypress.Commands.add('FullscreenButtons_Logged',() => {

})


Cypress.Commands.add('Banner01',() => {
    cy.get('.partner__image')
        .scrollIntoView()
        .should('be.visible')
        .should(([img]) => {
            expect(img.naturalWidth).to.above(650)
            expect(img.naturalHeight).to.above(550)
        })
})


Cypress.Commands.add('FilterTexts',(Title, Subtitle) => {
    cy.get('.globo-bold')
            .should('be.visible')
            .and('have.text', Title)
    cy.get('.globo-thin')
            .should('be.visible')
            .and('have.text', Subtitle)
})


Cypress.Commands.add('Filter',() => {
    // Aguardando novas atualizações para automatizar
})


Cypress.Commands.add('Button_VejaMaisOfertas',() => {
    cy.get('.redirect__btn > .vtr-input')
            .scrollIntoView()
            .should('be.visible')
            .click()
            .url().should('eq', Cypress.env('VITRINE_HOME'))
            .go("back")        
})


Cypress.Commands.add('Button_FAQ()',() => {
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


