class login{

    

    loginWithValidCredentials(){
        const data = require ("../Pages/loginPageLocatorandData.json")
        const method = require ("../Utlities/commonMethod")

        cy.xpath("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/*[1]").click()
        method.waitTimer(2000)
        method.dataSend(data.user_name_input_field,data.user_name)
        method.dataSend(data.password_input_field,data.password)
        method.waitTimer(1000)
        cy.xpath(data.sign_in_button).click()
        method.waitTimer(3000)
        method.dataSend(data.otp_input_field,data.otp)
        method.waitTimer(1000)
        cy.xpath(data.submit_button).click()
        method.waitTimer(3000)
        method.takeFullScreenshot("after login taken screenshot !!!")


    }

}export default login
