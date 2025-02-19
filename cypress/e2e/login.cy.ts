describe("coba login", () => {
  it("navigasi antara login, register, reset password, dan kembali ke login", () => {
    cy.visit("http://localhost:3000/login");

    cy.contains("Masukkan username dan password Anda").should("be.visible");

    cy.wait(3000);

    cy.contains("Daftar").click();

    cy.wait(2000);

    // URL berubah ke halaman register
    cy.url().should("include", "/register");

    cy.wait(1500);

    // Kembali login
    cy.go("back"); //

    cy.wait(2000);

    cy.url().should("include", "/login");

    cy.wait(1500);

    // menuju halaman reset password
    cy.contains("Reset Password").click();

    cy.wait(2000);

    // URL berubah ke halaman reset
    cy.url().should("include", "/reset-password");

    cy.wait(2000);

    // Kembali login
    cy.go("back");

    cy.wait(1500);

    cy.url().should("include", "/login");

    // Input
    cy.get("#name") // id="name"
      .type("hamka")
      .should("have.value", "hamka");

    cy.get("#password") // id="password"
      .type("hamka321")
      .should("have.value", "hamka321");

    cy.get("button.bg-zinc-800").click();

    cy.url().should("include", "/admin");
  });
});
