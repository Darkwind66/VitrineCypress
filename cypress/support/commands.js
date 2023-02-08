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
    // -- Valida que o botão Menu está visivel na tela, e clica para expandir a lista
    cy.get('.button-menu-container > button')
        .should('be.visible')
        .click()
        .should('have.attr', 'aria-expanded', 'true')
    
    // -- Valida que a lista de páginas do Menu está visivel
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

Cypress.Commands.add('MenuPagesRedirect', () => {
    cy.contains('Home').parent()
            //.should('contain.text', 'Home')
            .click('bottomLeft')
            .url().should('eq', 'https://vitrine-qa1.qa.globoi.com/')
            .go('back')
})


Cypress.Commands.add('LogoVitrine',() => {
    cy.get('[alt="Logo Vitrine Globo"]')
            .scrollIntoView()
            .click()
            .url().should('eq', 'https://vitrine-qa1.qa.globoi.com/')
            .go('back')
})


/**
 *  -- Esta função serve para testar uma suite inteira de testes com usuário logado.
 *     Chamando ela por meio de um hook, podemos manter o teste de todos os itens da página como logado,
 *     sem precisar fazer logout e login em cada execução de testes individuais 
 */
Cypress.Commands.add('login',(username, password) => {
    cy.session([username = 'glbteste.avt.parcerias+1330@mailinator.com', 
        password = Cypress.env('PASSWORD') ], () => {
        cy.visit(Cypress.env('LOGIN_QA1'))

        cy.get('#login').type(username)
        cy.get('#password').type(password)
        cy.get('.button').click()
        cy.url().should('contain', 'finish')
    })
    
    
    
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

// -- Esta função é do botão "Assine já" do componente fullscreen das páginas
Cypress.Commands.add('FullscreenButtons_Checkout',(textCTA1, urlCTA1) => {
    cy.get('vtr-link.offer-button > .vtr-input')
        .scrollIntoView()
        .should('be.visible')
        .and()
        .and('have.text', textCTA1) // especificar o texto ao chamar esta função na página
        .click()
        .url().should('contain.text', urlCTA1) // especificar o sku ao chamar esta função na página
})

// -- Esta função é do botão "Conhecer Ofertas" do componente fullscreen das páginas
Cypress.Commands.add('FullscreenButtons_KnowingOffers',(textCTA2) => {
    cy.get('.offer-button > .vtr-button')
        .scrollIntoView()
        .should('be.visible')
        .and('have.text', textCTA2)
        .click()
        
    // -- TODO
    // Validar a ação scrollDown após clicar no botão
})


Cypress.Commands.add('Banner01',() => {
    cy.get('.partner__image')
        .scrollIntoView()
        .should('be.visible')
        .should(([img]) => {
            expect(img.naturalWidth).to.above(650)
            expect(img.naturalHeight).to.above(550)
        })
    
    // cy.get('.partner__title').should('be.visible').and(text1)  
    // cy.get('.partner__description').should('be.visible').and(text2)  
})


Cypress.Commands.add('FilterTexts',(Title, Subtitle) => {
    cy.get('.globo-bold')
            .should('be.visible')
            .and('have.text', Title)
    cy.get('.globo-thin')
            .should('be.visible')
            .and('have.text', Subtitle)
})


// -- Valida os botões do filtro para Deslogados e Logados Free
//   Como regra, deslogados e logados free não possuem o filtro "Ofertas turbinadas",
//   portanto o filtro pré-selecionado é o "Todos"
Cypress.Commands.add('FilterDefault',() => {
    cy.get('.filter__list').children()
        .should('have.length', 4).then(($filt)=>{
            expect($filt[0]).have.text(' Todos ')
            expect($filt[0]).have.class('active')
            expect($filt[1]).have.text(' Assinaturas globoplay ')
            expect($filt[2]).have.text(' Ofertas combinadas ')
        })
})

// -- Valida os botões do filtro para Assinantes Globoplay
//   Já neste cenário, logados assinantes possuem o filtro "Ofertas turbinadas",
//   portanto o filtro pré-selecionado é o "Ofertas turbinadas"
Cypress.Commands.add('FilterSubscriber',() => {
    cy.get('.filter__list').children()
        .should('have.length', 4).then(($filt)=>{
            expect($filt[0]).have.text(' Todos ')
            expect($filt[1]).have.class('active')
            expect($filt[1]).have.text(' Ofertas turbinadas ')
            expect($filt[2]).have.text(' Assinaturas globoplay ')
            expect($filt[3]).have.text(' Ofertas combinadas ')
        })
})


// -- Valida o botão Detalhes da Oferta no carrossel de ofertas na HOME
Cypress.Commands.add('OfferButtonDetalhes_HOME', () => {
    cy.get('#globoplay > .offer-card > .offer-card__front > .offer-card-front > .body > .offer-card-front__group-buttons > vtr-link.offer-card-front__group-buttons--plan > .vtr-input')
            .click()
            cy.url().wait(1500).should('contain', 'Pro-0279' )
})


// -- Valida o botão Detalhes da Oferta no carrossel de ofertas nas LPs
Cypress.Commands.add('OfferButtonDetalhes_LP', () => {
    cy.get('[aria-label="Filtro Todos"]').click()
        cy.get('#splide01-slide01 > app-offer-card-new > .offer-card > .offer-card__front > .offer-card-front > .body > .offer-card-front__group-buttons > vtr-link.offer-card-front__group-buttons--plan > .vtr-input')
            .click()
        cy.url().wait(1500).should('contain', 'Pro-0279')
})


// -- Valida o botão Assine já da Oferta no carrossel de ofertas na Home
Cypress.Commands.add('OfferButtonAssine_HOME', () => {
    cy.get('#globoplay > .offer-card > .offer-card__front > .offer-card-front > .body > .offer-card-front__group-buttons > vtr-link.offer-card-front__group-buttons--plan > .vtr-input')
        .click()
        cy.url().should('contain', 'Pro-0279')
})


// -- Valida o botão Assine já da Oferta no carrossel de ofertas nas LPs
Cypress.Commands.add('OfferButtonAssine_LP', () => {
    cy.get('[aria-label="Filtro Todos"]').click()
    cy.get('#splide01-slide01 > app-offer-card-new > .offer-card > .offer-card__front > .offer-card-front > .body > .offer-card-front__group-buttons > vtr-link.offer-card-front__group-buttons--plan > .vtr-input')
        .click()
    cy.url().wait(1500).should('contain', 'Pro-0279')
})

// -- Valida os links de Href dos botões Assine Já do carrossel de ofertas nas LPs
Cypress.Commands.add('OfferHrefLinks_LP', () => {
    cy.get('[aria-label="Filtro Todos"]').click()
    cy.get('#splide01-list').get('a').each(page => {
        cy.request(page.prop('href'))
        })
})


Cypress.Commands.add('Button_VejaMaisOfertas',() => {
    cy.get('.redirect__btn > .vtr-input')
            .scrollIntoView()
            .should('be.visible')
            .click()
            .url().should('eq', Cypress.env('VITRINE_HOME'))
            .go("back")        
})



Cypress.Commands.add('Button_FAQ',() => {
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


Cypress.Commands.add('Footer_OtherTexts', () => {



})


Cypress.Commands.add('Footer_Buttons', () => {
    cy.get('.footer__copyright__links').children()
        .should('have.length', 3).and('be.visible')
    
    cy.contains('Minha conta')
        .should('have.prop', 'href', 'https://vitrine-qa1.qa.globoi.com/%20//minhaconta.globo.com/')
        
    cy.contains('Política de Privacidade')
        .should('have.prop', 'href', "https://vitrine-qa1.qa.globoi.com/%20//privacidade.globo.com/privacy-policy/")
        
    cy.contains('Termos de uso')
        .should('have.prop', 'href', 'https://vitrine-qa1.qa.globoi.com/%20//ajuda.globo/globoplay/termos-e-politicas/')
})

