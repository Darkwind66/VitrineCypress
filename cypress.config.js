const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = {
  env: {
    PRD: "vitrine.globo.com",

    VITRINE_HOME: "https://vitrine-qa1.qa.globoi.com/",
    LOGIN_URL: "https://login.globo.com/login",
    DEEZER_PAGE: "https://vitrine.globo.com/assine/deezer-premium",
    TELECINE_PAGE: "https://vitrine.globo.com/assine/telecine",
    DISNEY_PAGE: "https://vitrine-qa1.qa.globoi.com/assine/disney",

    WIDGET: "https://jv-qa1-vitrine-library.apps.tsuru.dev.gcp.i.globo/?",

    API_RECOMMENDATION_URL:
      "https://jv-qa1-vitrine-bff.apps.tsuru.dev.gcp.i.globo/recommendation?",

    //URLs das LPs de TV:
    GP_SAMSUNG:
      "https://vitrine-qa1.qa.globoi.com/assine/globoplay-tv?produto=gp,gp2,tc,gptc,gp2tc,pm,gppm,gp2pm,tcpm,cb",
   
    GP_MAISCANAIS_SAMSUNG:
      "https://vitrine-qa1.qa.globoi.com/assine/mais-canais-tv?produto=gp2,gp2tc,gp2pm",

    GP_LG:
      "https://vitrine-qa1.qa.globoi.com/assine/globoplay-tv?produto=gp,gp2,gptc,gp2tc,pm,gppm,gp2pm,tcpm,cb",
    GP_MAISCANAIS_LG:
      "https://vitrine-qa1.qa.globoi.com/assine/mais-canais-tv?produto=gp2,gp2tc,gp2pm",

    GP_TCL:
      "https://vitrine-qa1.qa.globoi.com/assine/mais-canais-tv?produto=gp,gp2,gptc,gp2tc,pm,gppm,gp2pm,tcpm,cb",
    GP_MAISCANAIS_TCL:
      "https://vitrine-qa1.qa.globoi.com/assine/mais-canais-tv?produto=gp2,gp2tc,gp2pm",

    //Massa de Dados
    GLOBOID_FREE: "d0d07cab-a58b-4622-9816-61728f074e6f",
    EMAIL_FREE: "glbteste.avt.vitrine+1168@gmail.com",

    GLOBOID_GP_MENSAL: "2421be5a-b495-4efe-bbec-1a00fc0fcdfc",
    EMAIL_GP_MENSAL: "glbteste.avt.parcerias+1315@mailinator.com",

    GLOBOID_GP_ANUAL: "99d925ea-0db2-4d8d-92fc-740ae2202c96",
    EMAIL_GP_ANUAL: "glbteste.avt.parcerias+1300@mailinator.com",

    GLOBOID_GPCANAIS_MENSAL: "b01a60d9-41e2-4b71-bf7f-9f8467687e2c",
    EMAIL_GPCANAIS_MENSAL: "glbteste.avt.parcerias+1302@mailinator.com",

    GLOBOID_GPCANAIS_ANUAL: "6c60afd5-489b-4cd3-855a-9a4093c9d8c0",
    EMAIL_GPCANAIS_ANUAL: "glbteste.avt.parcerias+1304@mailinator.com",

    USER_PASSWORD: "12345678",


    // -- Footers: Textos das páginas:

    ONE_ASTERISK: "* Sinal da Globo gratuito disponível em algumas cidades nos estados: Acre, Amapá, Amazonas, Bahia, Ceará, Espírito Santo, Goiás, Maranhão, Mato Grosso, Mato Grosso do Sul, Minas Gerais, Pará, Paraná, Pernambuco, Rio de Janeiro, Rio Grande do Norte, Rio Grande do Sul, Rondônia, Roraima, Santa Catarina, São Paulo e o Distrito Federal.",
    TWO_ASTERISK: "** Canal gratuito no território brasileiro.",
    THREE_ASTERISK: "*** O Premiere, com a maior cobertura do futebol nacional, exibe os jogos ao vivo dos campeonatos estaduais (Gaúcho, Paulista*, Mineiro e Pernambucano) para seus assinantes, além da Copa do Brasil 2022 e do Campeonato Brasileiro Séries A e B 2022 dos clubes que cederam direitos à Globo (não inclui Athletico Paranaense 2022). A variedade de campeonatos e jogos disponíveis pode ser alterada, a qualquer tempo, conforme negociações de direitos pela Globo e/ou por conta da crise sanitária em decorrência da pandemia. A transmissão do Campeonato Paulista conta com 97 jogos, incluindo as fases decisivas – três jogos das quartas de final, as duas semifinais e os dois confrontos da final. Para o Campeonato Mineiro, o Premiere garante a exibição exclusiva de todos os jogos de Atlético, Cruzeiro e América, incluindo toda a fase final, com exceção das partidas em que o Cruzeiro for mandante na temporada 2022. A assinatura do Premiere está sujeita aos termos do respectivo contrato de assinatura, conforme a modalidade contratada: plano mensal por R$59,90/mês; plano anual por R$ 598,80/ano, dividido em 12 parcelas de R$ 49,90. A assinatura do plano anual dá acesso ao Premiere por 12 meses, contados a partir da sua data de assinatura. Esta oferta poderá ser contratada (i) diretamente junto à Globo (premiere.globo), através da internet, ou (ii) junto dos nossos parceiros de venda, de sua preferência, em seus diversos canais de relacionamento.",
    FOUR_ASTERISK: "**** A assinatura do Combate está sujeita aos termos do respectivo contrato de assinatura, conforme a modalidade contratada: plano mensal por R$24,90/mês; plano anual por R$ 238,80/ano, divididos em 12 parcelas de R$ 19,90. A assinatura do plano anual dá acesso ao Combate por 12 meses, contados a partir da sua data de assinatura. Verifique a disponibilidade e as condições específicas da oferta dos planos do Combate (i) diretamente junto à Globo através da internet (combate.globo) ou (ii) junto à sua Operadora. Oferta do plano anual não disponível para contratações via loja de aplicativos da Apple. Parcelamento do plano anual não disponível para contratações via loja de aplicativos Google. Os atuais preços são exclusivos para os novos assinantes.",
    FIVE_ASTERISK: "***** O benefício é válido apenas para novos assinantes Deezer Premium. Os 6 meses de free trial de Deezer Premium estão atrelados à assinatura do Globoplay. Em caso de cancelamento do Globoplay, o valor cobrado pelo pacote Deezer Premium será de R$ 22,90 mensais.",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
};
