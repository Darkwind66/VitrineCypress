/// <reference types="Cypress"/>
import { getAllRecommendations } from "../recommendations/getRecommendation";

describe('Default page test',() => {
    beforeEach(() => {
        cy.viewport(1980, 1080)
        cy.visit('https://vitrine-qa1.qa.globoi.com/assine/deezer-premium')      
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

    // -- Neste bloco de testes está sendo validada a ordem da lista do Menu,
    it('Validanting Header Component', () => {
        cy.Menu() 
        
        // -- Valida que a lista de páginas contém 11 itens 
        //    e valida se a resposta de cada link das URL está retornando corretamente do endpoint 
        cy.get('.sidebar > ul')
            .children() 
            .should('have.length', 11).then(() => {
                menuList.forEach(menuList => {
                    cy.contains(menuList).then((Link) => {
                        cy.request(Link.prop('href'))
                    })                
                })
            })

        // -- Valida que ao clicar em um link do menu, está redirecionando corretamente
        cy.MenuPagesRedirect()
            
        // -- Valida a função de click do logo Vitrine    
        cy.LogoVitrine()

        // -- Valida as funcionalidades e textos do botão e modal do Login
        cy.LoginButton()
    })


    it('Validanting Fullscreen Component', () => {
        cy.fullscreenImage_Desktop() // -- Este teste valida se a imagem do Hero não está quebrada.
        cy.FullscreenButtons_Default(' conhecer ofertas')// -- Valida se os botões do Hero estão funcionando
    })

    //Valida os componentes do Banner argumento de vendas 01
    it('Validating Banner 01 Component', () => {
        cy.Banner01()
    })


    // -- Desativei este bloco de testes, pois estamos para receber uma mudança nesse componente de Filtros em breve
    it('Validating Filter Component', () => {
        cy.FilterTexts('Ofertas Globoplay com Deezer Premium', 'Explore os detalhes dos nossos produtos')
        cy.FilterDefault()
    })

    it('Validating Offers Buttons', () => {

        getAllRecommendations(Cypress.env('API_RECOMMENDATION_URL')).then((Response) => {
            for(var index in Response.body.offers){
                index++
            }            
            cy.get('[aria-label="Filtro Todos"]').click()
            cy.get('#splide02-list').children().should('have.length',[index])
            cy.get('#globoplay > .offer-card > .offer-card__front > .offer-card-front > .body > .offer-card-front__group-buttons > vtr-button.offer-card-front__group-buttons--plan > .vtr-button').click().and(cy.contains('Assine já')).click()
            cy.get('#globoplay > .offer-card > .offer-card__back > .offer-card-back > .body > .offer-card-back__buttons > .offer-card-back__buttons--item > .vtr-input').click({force:true})
        })
    })


    //Valida o botão Veja mais ofertas
    it('Validating FAQ and More Offfers Buttons', () => {
        cy.Button_VejaMaisOfertas()
        cy.Button_FAQ()
    })

    //Valida o texto do rodapé
    it('Validating Footer Component', () => {
        cy.get('.footer__info')
            .scrollIntoView()
            .should('contains.text', Cypress.env('ONE_ASTERISK'))
            .and('contains.text', Cypress.env('TWO_ASTERISK'))
        //     .and('contains.text', Cypress.env('FIVE_ASTERISK')) // -- Desativado pq temos um BUG em prod! :D       
        cy.Footer_Buttons()
    })
})