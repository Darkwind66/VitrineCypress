/// <reference types="Cypress"/>

describe('Default page test',() => {
    before(() => {
        cy.viewport(1980, 1080)
        cy.visit('vitrine.globo.com/assine/deezer-premium')      
    })
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })
    const menuList = [
        'Home',
        'Globoplay',
        'Globoplay + canais ao vivo',
        'Disney+',
        'Telecine',
        'Lionsgate+',
        'Premiere',
        'Giga Gloob',
        'Discovery+',
        'Apple TV+',
        'Combate'
    ] 

    // -- Neste bloco de testes, está sendo validada a ordem da lista do Menu,
    //    e tbm se os links das URLs estão corretos.
    it.skip('Validanting Header Component', () => {
        cy.Menu() 
        cy.get('.sidebar > ul').children() 
        .should('have.length', 11).then(() => {
            menuList.forEach(menuList => {
                cy.contains(menuList)
                .then((Link) => {
                    cy.request(Link.prop('href'))
                })                
            })
        })
        cy.LogoVitrine()
        cy.LoginButton()
    })


    it.only('Validanting Fullscreen Component', () => {
        cy.fullscreenImage_Desktop() // -- Este teste valida se a imagem não está quebrada.
        cy.FullscreenButtons_Default()
      //cy.Texts() // --  Precisamos verificar se é válido automatizar essa parte de textos, devido a constante mudança
    })

    //Valida os componentes do Banner argumento de vendas 01
    it.skip('Validating Banner 01 Component', () => {
        cy.Banner01()   
    })


    // -- Desativei este bloco de testes, pois estamos para receber uma mudança nesse componente de Filtro em breve
    it.skip('Validating Filter Component', () => {
        cy.FilterTexts('Ofertas Globoplay com Deezer Premium', 'Explore os detalhes dos nossos produtos')
        cy.FilterCarroussel()
    })



    //Valida o botão Veja mais ofertas
    it('Validating FAQ and More Offfers Buttons', () => {
        cy.Button_VejaMaisOfertas()
        cy.Button_FAQ()
    })

    //Valida o texto do rodapé
    it('Validando o Footer', () => {
        cy.get('.footer__info')
            .scrollIntoView()
            .should('have.text', Cypress.env('FOOTERS_DEEZER'))
    })
})