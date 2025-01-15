describe("alerts", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
  });

  let js_alert_button = "//button[contains(text(),'Click for JS Alert')]";
  let js_confirm_button = "//button[contains(text(),'Click for JS Confirm')]";
  let js_prompt_button = "//button[contains(text(),'Click for JS Prompt')]";
  let result = "//p[@id='result']";

  it("alert popup", () => {
    cy.xpath(js_alert_button).click();
    cy.wait(1000);
    cy.xpath(result).should("have.text", "You successfully clicked an alert");
    cy.wait(1000);

    // cy.on("window:confirm", () => {
    //   return false;

    // });
    // cy.wait(1000);
    // cy.xpath(js_confirm_button).click()
    // cy.wait(1000 )
    // cy.xpath(result).should("have.text" , "You clicked: Cancel")

    cy.on("window:confirm", () => {
      return true;
    });
    cy.wait(1000);
    cy.xpath(js_confirm_button).click();
    cy.wait(1000);
    cy.xpath(result).should("have.text", "You clicked: Ok");

    // cy.window().then(function ($win) {
    //     cy.stub($win, "prompt").returns("test text for testing.");
    //     cy.xpath(js_prompt_button).click();
    //   });



    cy.window().then(win =>{
        cy.stub(win , "prompt").returns("This is a text!!!")
        cy.contains("Click for JS Prompt").click()
    })
    cy.xpath(result).should("have.text","You entered: This is a text!!!")




  });
});
