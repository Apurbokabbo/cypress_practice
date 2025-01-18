describe ("fixtures" , ()=>{

  
    beforeEach(() => {
        cy.visit("https://dev.kartat.io/");
      });
    

    it("login with credentials" , ()=>{
        cy.wait(2000)
        cy.xpath("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/*[1]").click()
        cy.wait(2000)

        cy.fixture("login_cre").then((data) =>{
            cy.wait(3000)
            cy.xpath("//input[@class='flex h-10 border-none bg-[#FAFAFA] text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 border border-gray-400 rounded-lg py-4 px-12 w-full' and @placeholder='Email' and @type='email']").type(data.user_name)
            cy.xpath("//button[@class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring-none focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full my-4' and @type='submit' and text()='Sign In']").type(data.password)
            cy.wait(1000)
            cy.xpath("//button[contains(text(),'Sign In')]").click()
            cy.xpath(3000)
            cy.xpath("//input[@class='flex h-10 w-full rounded-md border-none border-input bg-[#FAFAFA] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50' and @aria-label='Please enter OTP character 1' and @type='text']").type(data.otp)
            cy.wait(1000)
            cy.xpath("//button[contains(text(),'Submit')]").click()
            cy.wait(2000)
        })

    })


})