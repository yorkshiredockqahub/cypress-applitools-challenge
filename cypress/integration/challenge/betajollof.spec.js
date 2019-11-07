// Intellisense
/// <reference types="Cypress" />

// Go to Web
describe('Beta Jollof Challenge', function(){

    //Hook
    this.beforeEach('Background',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
        cy.title().should('include', 'Internet')
        cy.eyesOpen({appName: 'Jollof Challenge', batchName: 'Beta'})
    })

    this.afterEach('Teardown', ()=>{
        cy.eyesClose()
    })

    it('Functional Validation with Cypress Assertion', () => {
        cy.get('.heading')
        .should('be.visible')
        .and('contain.text', 'Welcome')
        .and('contain', 'internet')

        cy.get('h2').should('be.visible')
        cy.get(':nth-child(1) > a')
        .should('have.attr', 'href')
        .and('include', 'abtest')

        cy.get(':nth-child(1) > a').click()
        cy.title().should('include', 'Internet')

    })

    it('Interactive Validation with Cypress Assertion', () => {
        cy.get(':nth-child(21) > a').click()
        cy.get('h2')
        .should('be.visible')
        .and('contain.text', 'Login Page')

        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()

        cy.get('.button').should('be.visible')
    })

    it('Visual Validation with Applitools', () => {
        cy.eyesCheckWindow('herokuapp')

    })
})