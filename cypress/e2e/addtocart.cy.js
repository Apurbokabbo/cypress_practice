
describe("add to cart flow" , ()=> {

    it("add to cart and assetion value" , ()=> {

        cy.visit('https://automationexercise.com/')
        cy.wait(2000)
        cy.title().should("eq" , "Automation Exercise")

        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.wait(1000)
        cy.title().should("eq" , "Automation Exercise - All Products")
        cy.wait(1000)
        cy.get('#search_product').type("Winter Top")
        cy.wait(500)
        cy.get('#submit_search').click()
        cy.wait(1000)
        cy.get('.productinfo > .btn').click()
        cy.wait(500)
        cy.get('u').click()
        cy.get('.cart_total_price').contains("Rs. 600")
        



    })

})