import open_Url from "../Base/openURL";
import login from "../Pages/loginPage";

describe ("Kartat" , ()=>{
    //ClassName objName = new ClassName()

    const url = new open_Url()
    const loginpage = new login()


    it("test" , ()=>{
        url.openUrl()
        loginpage.loginWithValidCredentials()
    })
})