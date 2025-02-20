describe("coba reset", () => {
  it("coba cari reset", () => {
    cy.visit("http://localhost:3000/reset-password");
    cy.contains("Forgot Password");

    cy.get("input[type='email']").type("navila@gmail.com");

    cy.get("button.bg-blue-600").click();

    cy.url().should("include", "/admin");
  });
});
