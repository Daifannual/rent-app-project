describe("coba reset", () => {
  it("coba cari reset", () => {
    cy.visit("http://localhost:3000/reset-password");
    cy.contains("Forgot Password").should("be.visible");

    cy.get("[email='email']").type("navila@gmail.com");
    cy.get("button.bg-zinc-800").click();
  
    cy.url().should("include", "/admin");
  });
});
