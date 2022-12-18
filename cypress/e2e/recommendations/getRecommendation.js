/// <reference types="cypress"/>

function getAllRecommendations(){
    return cy.request({
        method: 'GET',
        url: ('https://jv-qa1-vitrine-bff.apps.tsuru.dev.gcp.i.globo/recommendations?globoId=')//) 
        //+ 'd0d07cab-a58b-4622-9816-61728f074e6f') // Logado Free
        //+ '4d5f95fb-befb-43f2-a3c1-1db2d9db1888') // Assinante GP Mensal
        //+ '26f3ab74-64c7-4058-b73b-001cbaddf203') // Assinante GP Anual
        //+ '2238cb02-d2fa-43e9-acea-c9587f668290') // Assinante GPCanais Mensal
    })
}

function getAllRecommendationsPRD(){
    return cy.request({
        method: 'GET',
        url: ('https://jv-prod-vitrine-bff.apps.tsuru.gcp.i.globo/recommendations?globoId='
        )//+ 'd882f8b7-1b5d-4a82-acd8-abfce6ae529a') // Logado Free PRD
    })
}

export{getAllRecommendations}
export{getAllRecommendationsPRD}