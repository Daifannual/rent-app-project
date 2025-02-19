describe("coba register", () => {
    it("coba cari register", () => {
      cy.visit("http://localhost:3000/register");
      cy.contains("Masukkan username ,email dan password Anda").should("be.visible");

    cy.wait(3000);

        cy.get("#email") // sesuai id="name"
        .type("navi@gmail.com") // username
        .should("have.value", "navi@gmail.com"); // memastikan nilai input
  
      cy.get("#password") // id="password"
        .type("navi123") // Masukkan password
        .should("have.value", "navi123"); // Pastikan nilai input benar
        
        cy.wait(2000)
  
      cy.get("button.bg-zinc-800").click();
  
      cy.url().should("include", "/admin");
    });
  });

   