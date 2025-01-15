describe("screenshots", () => {
    beforeEach(() => {
      // cy.viewprot(1020, 780);
      cy.visit("https://register.rediff.com/register/register.php");
    });
  
    it("screenshot", () => {
      cy.wait(2000);
      cy.get('[width="200"] > input').type("Test User");
      cy.get("#newpasswd").type("123456");
      cy.get("#newpasswd1").type("123456");
      cy.get("#mobno").type("01716395893");
      cy.get("#country").select("17");
      cy.get('[colspan="3"] > img').screenshot()
      cy.screenshot()
      cy.wait(1000)
    });
  });
  