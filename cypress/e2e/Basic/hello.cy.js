/// <reference types="cypress-xpath" />


describe ("first c test class" , ()=>{

    it("hello cypress method" , ()=>{
            cy.visit("https://automationexercise.com/")
            cy.wait(3000)
            cy.get('.shop-menu > .nav > :nth-child(3)') .click()
             cy.wait(3000)
    })










})