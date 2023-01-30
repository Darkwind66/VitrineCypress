import * as recommendation from './getRecommendation';

describe('Show all recommendation by elegibility', () => {
    it('Ofertas recomendadas em QA1', () => {
        recommendation.getAllRecommendations().then((Response) => {
            expect(Response.status).to.eq(200)
            cy.log(Response.body)

            var contM = 0
            var contY = 0 
            var contB = 0 

            for(var index in Response.body.offers){
                var nomeDaOferta = (Response.body.offers[index].name)
                var planoMensal = (Response.body.offers[index].products[0])
                var planoAnual = (Response.body.offers[index].products[1])
                var planoBianual = (Response.body.offers[index].products[2])
                
                if(planoMensal){
                    contM++
                    cy.log(nomeDaOferta + ' Mensal')
                    cy.log(planoMensal.sku)
                    cy.log()
                }

                if(planoAnual){
                    contY++
                    cy.log(nomeDaOferta + ' Anual')
                    cy.log(planoAnual.sku)
                    cy.log()
                }

                if(planoBianual){
                    contB++
                    cy.log(nomeDaOferta + ' Bianual')
                    cy.log(planoAnual.sku)
                    cy.log()
                }
            }
            cy.log('Total de Ofertas: ', contM+contY+contB)

        })
    })

    // Exibe a recomendação de PRD
    it('Ofertas recomendadas em PRD', () => {
        recommendation.getAllRecommendationsPRD().then((Response) => {
            expect(Response.status).to.eq(200)
            cy.log(Response.body)

            var contM = 0
            var contY = 0
            var contB = 0 

            for(var index in Response.body.offers){
                
                var nomeDaOferta = (Response.body.offers[index].name)
                var planoMensal = (Response.body.offers[index].products[0])
                var planoAnual = (Response.body.offers[index].products[1])
                var planoBianual = (Response.body.offers[index].products[2])
                
                if(planoMensal){
                    contM++
                    cy.log(nomeDaOferta + ' Mensal')
                    cy.log(planoMensal.sku)
                    cy.log()
                }

                if(planoAnual){
                    contY++
                    cy.log(nomeDaOferta + ' Anual')
                    cy.log(planoAnual.sku)
                    cy.log()
                }
                
                if(planoBianual){
                    contB++
                    cy.log(nomeDaOferta + ' Bianual')
                    cy.log(planoAnual.sku)
                    cy.log()
                }
            }
            cy.log('Total de Ofertas: ', contM+contY+contB)
        })
    })
})