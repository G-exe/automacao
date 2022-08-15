/// <reference types="cypress"/>
var faker = require('faker');

//beforeEach(() => { });
    
    describe('Exercicio cypress', () => {

     it.only('executar login', () => {
        cy.get('.icon-user-unfollow').click()
        cy.fixture('perfil').then(dados => {

        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content').should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes,')

        }) 
        
    });

    it('Executar pré-cadastro', () => {
        let nameFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nameFaker)
        let senhaFaker = faker.internet.password()

        cy.get('.icon-user-unfollow').click()
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(senhaFaker)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nameFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')   
    });

    it('Efetuar uma compra', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let ruaFaker = faker.address.streetName()
        let numFaker = faker.random.number()
        let cityFaker = faker.address.city()
        let emailFaker = faker.internet.email(nomeFaker)
       

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="image-no-effect unveil-image"]').first().click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').type(nomeFaker)
        cy.get('#billing_last_name').type(sobrenomeFaker)
        cy.get('#billing_address_1').type(ruaFaker)
        cy.get('#billing_address_2').type(numFaker)
        cy.get('#billing_city').type(cityFaker)
        cy.get('#billing_postcode').type('72660236')
        cy.get('#billing_phone').type('11997623478')
        cy.get('#billing_email').type(emailFaker)
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        });
    });
