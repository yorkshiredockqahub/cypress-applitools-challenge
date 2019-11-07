// Intellisense
/// <reference types="Cypress" />

// Go to Web
describe('Alpha Jollof Challenge', function(){

    //Hook
    this.beforeEach('Background',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('include', 'Store')
        cy.eyesOpen({appName: 'Jollof Challenge', batchName: 'Alpha'})
    })

    this.afterEach('Teardown', ()=>{
        cy.eyesClose()
    })

    it('Functional Validation with Cypress Assertion', () => {
        cy.get('.logo').should('be.visible')
        cy.get('#search_query_top').should('be.visible')
        cy.get('[title="View my shopping cart"]').should('be.visible')
        cy.get('.sf-menu').should('be.visible')
        cy.get('#homeslider > :nth-child(3) > a > img').should('be.visible')
        cy.get('#slider_row').should('be.visible')
        cy.get('#center_column').should('be.visible')
        cy.get('#footer > .row').should('be.visible')
       
    })

    it('Interactive Validation with Cypress Assertion', () => {
        cy.get('#search_query_top').type('shirt')
        cy.get('#index > div.ac_results > ul > li').should('be.visible')
        cy.get('#searchbox > .btn').click()
        cy.get('.breadcrumb').should('be.visible')
        cy.get('#left_column').should('be.visible')

        cy.get('[title="View my shopping cart"]').click()
        cy.title().should('include', 'My Store')
    })

    it('Visual Validation with Applitools', () => {
        cy.eyesCheckWindow('Automation Practice')

    })
})