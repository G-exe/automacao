/// <reference types="cypress">
beforeEach(() => {
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    
});

describe('login', () => {
 it('executar pré cadastro', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content').should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes,')


 });
    
});

describe('tela produtos', () => {
it('', () => {
    cy.get('.logo-in-theme > .logo > a > .logo-img').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('[class="image-no-effect unveil-image"]')
        //.first()
       // .last()
      .eq(3)
      //.contains('70601091')  
      .click()

});    

});

    it.only('adicioar produtos no carrinho', () => {
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('[class="image-no-effect unveil-image"]').eq(3).click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain','foi adicionado no seu carrinho.')
    cy.get('.woocommerce-message > .button').click()

        
    });
    