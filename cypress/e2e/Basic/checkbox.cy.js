describe("checkbox", () => {
  beforeEach(() => {
    cy.visit("https://codenboxautomationlab.com/practice/");
  });

  it("test", () => {
    cy.wait(2000);

    //xpath
    let option1_xpath = "//input[@id='checkBoxOption1']";
    let option2_xpath = "//input[@id='checkBoxOption2']";
    let option3_xpath = "//input[@id='checkBoxOption3']";
    let radio_button =
      "//body/div[@id='page']/div[@id='content']/div[@id='primary']/main[@id='main']/article[@id='post-501']/div[1]/div[1]/div[1]/fieldset[1]/label[1]/input[1]";
    //value
    let option1_value = "option1";
    let option2_value = "option2";
    let option3_value = "option3";
    
    // //single check
    // cy.xpath(radio_button).check()
    // // cy.xpath(radio_button).click()
    // cy.xpath(option1_xpath).check()
    // cy.xpath(option2_xpath).check().should("be.enabled").and("have.value", option2_value)
    // cy.xpath(option3_xpath).check().should("be.enabled").and("have.value", option3_value)

    // cy.wait(1000);

    // //uncheck
    // cy.xpath(option1_xpath).click()
    // cy.xpath(option2_xpath).uncheck()
    // cy.xpath(option3_xpath).uncheck()

    // //multiplecheck
    // cy.get("input[type=checkbox]").check([option1_value,option2_value])

    // //uncheckmultiple
    
    // cy.get("input[type=checkbox]").uncheck([option1_value,option2_value])

    //function calling 
    checkboxSelector(option2_xpath,"check",option2_value)


});


});
function checkboxSelector(xpath, options, value) {
    if (options === "check") {
        cy.xpath(xpath).check().should("be.enabled").and("have.value", value);
    } else if (options === "uncheck") {
        cy.xpath(xpath).uncheck().should("be.enabled").and("have.value", value);
    }
} 
