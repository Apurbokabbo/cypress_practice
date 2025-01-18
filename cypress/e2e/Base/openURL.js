class open_Url{
    openUrl(){
        cy.visit("https://dev.kartat.io/")
        cy.wait(2000)
    }
}export default open_Url