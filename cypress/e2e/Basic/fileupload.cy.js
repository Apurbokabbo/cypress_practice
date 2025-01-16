// describe("file upload", () => {
//   beforeEach(() => {
//     cy.visit("https://the-internet.herokuapp.com/upload");
//   });

//   it("test", () => {
//     cy.wait(2000);
//     cy.get("#file-upload").selectFile("cypress\e2e\data\download.png")
//     cy.wait(1000);
//     cy.get("#file-submit").click();
//     cy.get("#file-upload").contains("download.png");
//     cy.wait(1000);
//   });
// });
describe("file upload", () => {
    beforeEach(() => {
      cy.visit("https://the-internet.herokuapp.com/upload");
    });
  
    it("test", () => {
      cy.wait(1000);
      
      // Correct file path for Cypress
      const filePath = "cypress/e2e/data/download.png";
  
      // Upload the file
      cy.get("#file-upload").selectFile(filePath);
  
      cy.wait(1000);
  
      // Submit the file
      cy.get("#file-submit").click();
  
      // Verify the uploaded file
      cy.get("#uploaded-files").contains("download.png");
  
      cy.wait(1000);
    });
  });
  