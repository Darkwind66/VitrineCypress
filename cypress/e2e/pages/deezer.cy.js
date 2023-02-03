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
    var contCard = 0

    // -- Neste bloco de testes está sendo validada a ordem da lista do Menu,
    it('Validanting Header Component', () => {
        cy.Menu() 
        
        // -- Valida se a lista de páginas contém 11 itens 
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


    it('Validating Filter Component', () => {
        cy.FilterTexts('Ofertas Globoplay com Deezer Premium', 'Explore os detalhes dos nossos produtos')
        cy.FilterDefault()
    })


    it('Validating Offer Buttons: Detalhes', () => {
        cy.OfferButtonDetalhes_LP()
    })


    it('Validating Offer Buttons: Assine', () => {
        cy.OfferButtonAssine_LP()
    })


    it('Validating Offers Href', () => {
        cy.OfferHrefLinks_LP()
    })

    // -- Valida se a quantidade de cards exibidos no carrossel está correta, 
    //    fazendo um request para o endpoint e verificando os cards no front:
    it('Validating Offer Cards', () => {
        getAllRecommendations(Cypress.env('API_RECOMMENDATION_URL')).then((Response) => {
            for(var index in Response.body.offers){
                var offerName = (Response.body.offers[index].name)
                var card = offerName.includes('Globoplay')
                if(card == true){
                    contCard ++
                }
                cy.log(contCard)
            }

            cy.get('#splide01-list').children()
                .should('have.length', contCard)
        })
    })
            
        


    //Valida o botão Veja mais ofertas
    it('Validating FAQ and More Offfer Buttons', () => {
        cy.Button_VejaMaisOfertas()
        cy.Button_FAQ()
    })

    //Valida o texto do rodapé
    it('Validating Footer Component', () => {
        cy.get('.footer__info')
            .scrollIntoView()
            .should('contains.text', Cypress.env('ONE_ASTERISK'))
            .and('contains.text', Cypress.env('TWO_ASTERISK'))
        cy.Footer_Buttons()
    })
})