describe("hover", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.com/");
  });

  it("test", () => {
    cy.wait(5000);
    cy.get("#nav-link-accountList > .nav-line-2").trigger("mouseover");
    cy.wait(1000);
    cy.xpath(
      "//header/div[@id='navbar']/div[@id='nav-flyout-anchor']/div[@id='nav-flyout-accountList']/div[2]/div[1]/div[3]/ul[1]/li[2]/a[1]/span[1]"
    ).click();
    cy.wait(1000);
  });
});
