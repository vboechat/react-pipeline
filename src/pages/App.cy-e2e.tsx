describe("App", () => {
  it("should render successfully", () => {
    cy.visit("/");

    cy.get("h1").contains("Hello World!");
  });
});
