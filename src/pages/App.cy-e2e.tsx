describe("App", () => {
  it("should render successfully", () => {
    cy.visit("http://localhost:5173");

    cy.get("h1").contains("Hello World!");
  });
});
