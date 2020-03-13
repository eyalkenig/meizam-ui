describe("CreateGroup test", () => {
  it("should go to create group page from navigation", () => {
    cy.visit("/create-group");

    cy.contains("Create group");
  });
});
